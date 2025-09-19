# CI/CD Monorepo Backend CRM

Este documento descreve o fluxo de integração contínua (CI) e deploy contínuo (CD) utilizado no monorepo do backend CRM.

## Visão Geral
- **CI:** Build, testes e lint isolados para cada microserviço.
- **CD:** Build e push de imagens Docker para cada microserviço no Docker Hub.
- **Orquestração:** Workflows definidos em `.github/workflows/ci.yml`.

## Fluxo CI
1. **Build de Imagem Docker**
   - Cada microserviço possui um job dedicado para build da imagem Docker (`build-<serviço>`).
2. **Testes Unitários/Integrados**
   - Cada microserviço executa seus testes isoladamente (`test-<serviço>`).
3. **Lint**
   - O lint é executado via `pnpm lint` no contexto do monorepo.

## Fluxo CD
1. **Push de Imagem Docker**
   - Para cada microserviço, há um job de push para o Docker Hub (`push-<serviço>`), executado apenas na branch `main`.
   - Requer secrets: `DOCKERHUB_USERNAME` e `DOCKERHUB_TOKEN` configurados no repositório.

## Exemplo de Workflow (ci.yml)
```yaml
jobs:
  build-api:
    ...
  test-api:
    ...
  push-api:
    ...
  # Repetido para cada microserviço
```

## Como configurar novos serviços
1. Criar Dockerfile em `apps/<serviço>/Dockerfile`.
2. Garantir scripts de build e test no `package.json` do serviço.
3. Adicionar jobs correspondentes no workflow.

## Variáveis e Segredos
- `DOCKERHUB_USERNAME`: usuário do Docker Hub
- `DOCKERHUB_TOKEN`: token de acesso do Docker Hub

## Referências
- [GitHub Actions Docs](https://docs.github.com/actions)
- [Docker Hub Docs](https://docs.docker.com/docker-hub/)

---
Dúvidas? Consulte o README do serviço ou abra uma issue.
