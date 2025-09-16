# Architecture Overview

## System Architecture

The CRM system is built as a monorepo with the following structure:

### Frontend (apps/web)
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Port**: 3000 (default)

### Backend (apps/api)
- **Framework**: NestJS 10
- **Language**: TypeScript
- **Port**: 3001
- **Database**: PostgreSQL via Prisma ORM

### Development Infrastructure
- **PostgreSQL**: Database (port 5432)
- **Redis**: Caching and sessions (port 6379)
- **Mailpit**: SMTP development server (ports 1025/8025)
- **MinIO**: S3-compatible object storage (ports 9000/9001)

### Monorepo Management
- **Package Manager**: pnpm with workspaces
- **Build Tool**: Turborepo for build orchestration
- **CI/CD**: GitHub Actions

## Key Design Decisions

1. **Monorepo Structure**: Enables shared code, consistent tooling, and simplified dependency management
2. **TypeScript First**: Strong typing across all applications for better developer experience
3. **Container-based Development**: Docker Compose for consistent local environment
4. **API-First Design**: Clear separation between frontend and backend with well-defined interfaces