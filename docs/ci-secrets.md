# CI/CD – Segredos obrigatórios (GitHub Actions)

Para funcionamento seguro do pipeline, configure os seguintes `secrets` no repositório (Settings > Secrets and variables > Actions):

## Secrets obrigatórios

- `DOCKERHUB_USERNAME` – Usuário do Docker Hub para push de imagens
- `DOCKERHUB_TOKEN` – Token de acesso do Docker Hub
- `DATABASE_URL` – String de conexão do banco (produção/staging)
- `JWT_SECRET` – Segredo JWT para autenticação

## Como configurar
1. Acesse o repositório no GitHub
2. Vá em Settings > Secrets and variables > Actions
3. Clique em "New repository secret"
4. Adicione cada variável acima com o valor correto

> Nunca exponha valores reais de secrets em código, logs ou documentação pública.

## Dicas
- Para ambientes diferentes (staging/prod), use ambientes do GitHub Actions e configure secrets por ambiente.
- Adicione outros secrets conforme integrações futuras (ex: chaves de API externas, cloud, etc).
