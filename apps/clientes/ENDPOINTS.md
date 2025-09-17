# Documentação dos Endpoints - Módulo Clientes

## Base URL

```
/clientes
```

---

## 1. Criar Cliente

- **Método:** POST
- **Rota:** `/clientes`
- **Body:**
  ```json
  {
    "nome": "string (3-100 caracteres)",
    "email": "string (e-mail válido)",
    "telefone": "string (opcional)",
    "endereco": "string (opcional)"
  }
  ```
- **Descrição:** Cria um novo cliente.

---

## 2. Listar Todos os Clientes

- **Método:** GET
- **Rota:** `/clientes`
- **Descrição:** Retorna todos os clientes cadastrados.

---

## 3. Buscar Cliente por ID

- **Método:** GET
- **Rota:** `/clientes/:id`
- **Parâmetros de rota:**
  - `id` (number): Identificador do cliente
- **Descrição:** Retorna os dados de um cliente específico.

---

## 4. Atualizar Cliente

- **Método:** PUT
- **Rota:** `/clientes/:id`
- **Parâmetros de rota:**
  - `id` (number): Identificador do cliente
- **Body:**
  ```json
  {
    "nome": "string (opcional, 3-100 caracteres)",
    "email": "string (opcional, e-mail válido)",
    "telefone": "string (opcional)",
    "endereco": "string (opcional)"
  }
  ```
- **Descrição:** Atualiza os dados de um cliente existente.

---

## 5. Remover Cliente

- **Método:** DELETE
- **Rota:** `/clientes/:id`
- **Parâmetros de rota:**
  - `id` (number): Identificador do cliente
- **Descrição:** Remove um cliente pelo ID.

---

> Todos os endpoints retornam o cliente criado/atualizado/removido ou uma lista de clientes, conforme o caso. Em caso de erro (ex: cliente não encontrado), retorna `null`.
