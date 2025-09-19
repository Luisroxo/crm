# CRM Frontend

Este projeto é o Frontend do CRM, desenvolvido em Next.js 14, TypeScript e TailwindCSS, seguindo arquitetura moderna e melhores práticas.

## Principais Tecnologias

## Segurança dos Tokens JWT e APIs

- **IMPORTANTE:**
	- Defina a variável de ambiente `JWT_SECRET` em todos os serviços que geram ou validam JWT (ex: auth, clientes). Nunca deixe segredos hardcoded no código.
	- Use HTTPS em produção (via proxy reverso, load balancer ou configuração cloud). Nunca exponha APIs sensíveis em HTTP puro.
	- Todos os serviços já possuem:
		- Validação obrigatória de `JWT_SECRET` no bootstrap
		- Rate limiting global (protege endpoints como `/auth/login` contra brute force)
		- CORS restritivo e headers de segurança (helmet)
	- Exemplo de uso no Docker Compose ou ambiente cloud:
		```env
		JWT_SECRET=um_segredo_forte_e_unico
		```

## Documentação principal
- `docs/roadmap-tecnico.md` — Roadmap e status do projeto
- `docs/plano-migracao-microservicos.md` — Checklist e migração
- `docs/diagrama-arquitetura.md` — Diagrama da arquitetura
- `docs/kubernetes.md` — Deploy e infraestrutura

> A documentação foi revisada e está centralizada nos arquivos essenciais acima.

## Build e Deploy
- Para build de produção:
	```
	pnpm -w build
	```
- Para subir infraestrutura local:
	```
	docker compose -f infra/docker/docker-compose.dev.yml up -d
	```

## Estrutura
- apps/web — Next.js
- apps/api — NestJS
- prisma/schema.prisma — modelos
- docs — arquitetura, API, LGPD, roadmap, migração

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 96696d7 (feat(setup): setup inicial do frontend com Next.js 14, Tailwind, ESLint, Prettier, Husky e estrutura base)
