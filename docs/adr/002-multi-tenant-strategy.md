# ADR-002: Multi-Tenant Strategy

## Status
Accepted

## Context
The CRM needs to support multiple tenants (organizations) with data isolation and customization capabilities.

## Decision
We will implement a **schema-per-tenant** approach using PostgreSQL:
- Each tenant gets their own database schema
- Shared tables (e.g., system configurations) remain in the public schema
- Tenant identification through subdomain or path-based routing

## Consequences

### Positive
- Strong data isolation between tenants
- Ability to customize schema per tenant
- Easier backup and restore per tenant
- Better performance isolation

### Negative
- More complex database migrations
- Increased operational overhead
- Schema synchronization challenges

## Implementation Notes
- Use Prisma with dynamic schema generation
- Implement tenant resolution middleware in NestJS
- Create tenant-aware database connection pooling