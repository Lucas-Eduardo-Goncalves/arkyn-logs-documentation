---
title: Criar response
---

Assim como a rota de `Request`, esta funcionalidade é primariamente para uso interno do sistema Arkyn Logs, destinada a registrar os detalhes de uma resposta HTTP.

## Rota

`POST /response`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Cria um novo registro de `Response` no banco de dados. A rota recebe os detalhes de uma resposta HTTP, como cabeçalhos e corpo, e os armazena para serem associados a um `HttpTraffic` ou `CoreLog`.

## Corpo da Requisição (Request Body)

| Campo     | Tipo | Descrição                                  | Obrigatório |
| :-------- | :--- | :----------------------------------------- | :---------- |
| `headers` | json | Objeto JSON com os cabeçalhos da resposta. | Sim         |
| `body`    | json | Objeto JSON com o corpo da resposta.       | Não         |

**Exemplo:**

```json
{
  "headers": {
    "Content-Type": "application/json",
    "X-Request-Id": "xyz-789"
  },
  "body": {
    "status": "sucesso",
    "pedidoId": "pedido-abc-123"
  }
}
```

## Resposta de Sucesso (Success Response)

**Código:** `201 Created`

**Conteúdo:** O objeto da resposta criada, incluindo seu novo ID.

**Exemplo:**

```json
{
  "id": "j1k2l3m4-n5o6-7890-1234-567890abcdef",
  "headers": {
    "Content-Type": "application/json",
    "X-Request-Id": "xyz-789"
  },
  "body": {
    "status": "sucesso",
    "pedidoId": "pedido-abc-123"
  },
  "createdAt": "2025-07-10T16:00:05.000Z"
}
```

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: `headers` ausente).
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
