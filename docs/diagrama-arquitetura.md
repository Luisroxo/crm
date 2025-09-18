# Diagrama de Arquitetura Distribuída (CRM)

```mermaid
graph TD
    subgraph API Gateway
        GW[API Gateway]
    end
    subgraph Serviços
        C[Serviço de Clientes]
        V[Serviço de Vendas/Funil]
        CO[Serviço de Comunicação]
        T[Serviço de Tarefas]
        A[Serviço de Automação/Bots]
        U[Serviço de Usuários & Autenticação]
    end
    subgraph Bancos de Dados
        DB_C[(DB Clientes)]
        DB_V[(DB Vendas)]
        DB_CO[(DB Comunicação)]
        DB_T[(DB Tarefas)]
        DB_A[(DB Automação)]
        DB_U[(DB Usuários)]
    end
    subgraph Kafka
        K[Kafka - Barramento de Eventos]
    end

    GW -->|REST/gRPC| C
    GW -->|REST/gRPC| V
    GW -->|REST/gRPC| CO
    GW -->|REST/gRPC| T
    GW -->|REST/gRPC| A
    GW -->|REST/gRPC| U

    C -- CRUD --> DB_C
    V -- CRUD --> DB_V
    CO -- CRUD --> DB_CO
    T -- CRUD --> DB_T
    A -- CRUD --> DB_A
    U -- CRUD --> DB_U

    C <--> K
    V <--> K
    CO <--> K
    T <--> K
    A <--> K
    U <--> K

    GW -.-> K
```

---

Este diagrama mostra a comunicação entre os microserviços, seus bancos de dados isolados, o barramento de eventos Kafka e o gateway de entrada.

Sugestão: Visualize este diagrama usando o plugin Mermaid no VS Code ou ferramentas online para melhor entendimento visual.
