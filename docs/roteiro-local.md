# Roteiro Local — CRM com Docker Compose

## 1. Pré-requisitos
- Docker e Docker Compose instalados

## 2. Subir tudo
```bash
docker-compose -f infra/docker/docker-compose.dev.yml up --build
```
Acesse o frontend: http://localhost:3000
APIs/backend: portas conforme cada serviço (veja README ou compose)

## 3. Variáveis de ambiente
- Use os arquivos `.env` de cada serviço para configurar conexões locais.
- Não é necessário domínio para rodar localmente.

## 4. Parar tudo
```bash
docker-compose -f infra/docker/docker-compose.dev.yml down
```

---
Dúvidas? Consulte os READMEs dos serviços ou abra uma issue.
