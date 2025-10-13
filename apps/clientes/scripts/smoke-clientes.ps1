param(
  [int]$Port = 3002,
  [int]$PromPort = 9464,
  [int]$TimeoutSeconds = 60,
  [string]$JwtSecret = 'dev-secret',
  [string]$DatabaseUrl = 'file:./dev.db'
)

$env:JWT_SECRET = $JwtSecret
$env:DATABASE_URL = $DatabaseUrl
$env:PORT = $Port

# build
Write-Host "[smoke] building clientes..."
pnpm --filter clientes run build | Write-Host

# start in background and capture logs
Write-Host "[smoke] starting clientes in background (logs -> cliente-out.log / cliente-err.log)"
# If there is an existing process running the same dist/main.js or listening on the port, stop it to avoid EADDRINUSE
Write-Host "[smoke] checking for existing clientes process..."
try {
  $existing = Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -and $_.CommandLine -like '*apps\\clientes\\dist\\main.js*' }
  if ($existing) {
    foreach ($p in $existing) {
      Write-Host "[smoke] found existing process ID=$($p.ProcessId) (cmdline=$($p.CommandLine)) - stopping"
      Stop-Process -Id $p.ProcessId -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 1
  }
} catch {}

# Also check for listeners on the port and kill their owning process if it looks like node
try {
  $listeners = netstat -aon | Select-String ":$Port" | ForEach-Object { ($_ -split '\s+')[-1] } | Select-Object -Unique
  foreach ($pid in $listeners) {
    if ($pid -and $pid -match '^[0-9]+$') {
      try {
        $procInfo = Get-Process -Id $pid -ErrorAction SilentlyContinue
        if ($procInfo -and $procInfo.ProcessName -like 'node*') {
          Write-Host "[smoke] found listener PID=$pid (node) on port $Port - stopping"
          Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
        }
      } catch {}
    }
  }
} catch {}

$proc = Start-Process -FilePath node -ArgumentList "apps\clientes\dist\main.js" -NoNewWindow -RedirectStandardOutput "apps\clientes\cliente-out.log" -RedirectStandardError "apps\clientes\cliente-err.log" -PassThru
Write-Host "[smoke] started PID=$($proc.Id)"

# wait for port
$stopwatch = [System.Diagnostics.Stopwatch]::StartNew()
while ($stopwatch.Elapsed.TotalSeconds -lt $TimeoutSeconds) {
  try {
    $tcp = Test-NetConnection -ComputerName 127.0.0.1 -Port $Port -WarningAction SilentlyContinue
    if ($tcp.TcpTestSucceeded) {
      Write-Host "[smoke] app port $Port is listening"
      break
    }
  } catch {}
  Start-Sleep -Seconds 1
}

if (-not $tcp.TcpTestSucceeded) {
  Write-Host "[smoke][error] app did not start within $TimeoutSeconds seconds"
  Write-Host "--- stdout ---"
  Get-Content apps\clientes\cliente-out.log -Tail 200
  Write-Host "--- stderr ---"
  Get-Content apps\clientes\cliente-err.log -Tail 200
  exit 2
}

# check health (wait until /health or /api/health returns 200 or timeout)
$healthOk = $false
$stopwatch2 = [System.Diagnostics.Stopwatch]::StartNew()
while ($stopwatch2.Elapsed.TotalSeconds -lt $TimeoutSeconds) {
  try {
    $health = Invoke-WebRequest "http://127.0.0.1:$Port/health" -UseBasicParsing -ErrorAction Stop
    if ($health.StatusCode -eq 200) { Write-Host "[smoke] health OK (/health)"; $healthOk = $true; break }
  } catch {}
  try {
    $health = Invoke-WebRequest "http://127.0.0.1:$Port/api/health" -UseBasicParsing -ErrorAction Stop
    if ($health.StatusCode -eq 200) { Write-Host "[smoke] health OK (/api/health)"; $healthOk = $true; break }
  } catch {}
  Start-Sleep -Seconds 1
}
if (-not $healthOk) { Write-Host "[smoke] health did not return 200 within $TimeoutSeconds seconds" }

# check metrics
try {
  $metrics = Invoke-WebRequest "http://127.0.0.1:$PromPort/metrics" -UseBasicParsing -ErrorAction Stop
  if ($metrics.StatusCode -eq 200) { Write-Host "[smoke] metrics OK (length=$($metrics.RawContentLength))" } else { Write-Host "[smoke] metrics returned $($metrics.StatusCode)" }
} catch {
  Write-Host "[smoke] metrics request failed: $($_.Exception.Message)"
}

Write-Host "[smoke] done. PID=$($proc.Id)"
Write-Host "[smoke] to stop the process: Stop-Process -Id $($proc.Id)"

exit 0
