import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';

const prometheusPort = process.env.OTEL_PROM_PORT ? Number(process.env.OTEL_PROM_PORT) : 9464;
const prometheusEndpoint = process.env.OTEL_PROM_ENDPOINT || '/metrics';

const sdk = new NodeSDK({
  traceExporter: undefined, // Adicione um exporter de tracing se desejar (ex: Jaeger, OTLP)
  metricReader: new PrometheusExporter({
    port: prometheusPort,
    endpoint: prometheusEndpoint,
  }),
  instrumentations: [getNodeAutoInstrumentations()]
});

try {
  sdk.start();
  console.log('OpenTelemetry iniciado (Prometheus em', prometheusPort, prometheusEndpoint, ')');
} catch (err: unknown) {
  console.error('Erro ao iniciar OpenTelemetry', err);
}
