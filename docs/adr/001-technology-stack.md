# ADR-001: Technology Stack Selection

## Status
Accepted

## Context
We need to select a technology stack for the CRM MVP that allows for rapid development, maintainability, and scalability.

## Decision
We have chosen:
- **Frontend**: Next.js 14 with TypeScript and TailwindCSS
- **Backend**: NestJS 10 with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Monorepo**: pnpm workspaces with Turborepo

## Consequences

### Positive
- TypeScript provides type safety across the stack
- Next.js offers excellent developer experience and performance
- NestJS provides enterprise-grade backend architecture
- Prisma offers type-safe database access
- Monorepo enables code sharing and consistency

### Negative
- Initial setup complexity with monorepo configuration
- Learning curve for team members unfamiliar with the stack
- TypeScript compilation overhead in development