---
title: Criar response
---

Assim como a rota de `Request`, esta funcionalidade é primariamente para uso interno do sistema Arkyn Logs, destinada a registrar os detalhes de uma resposta HTTP.

## Rota

```bash
POST /response
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Cria um novo registro de `Response` no banco de dados. A rota recebe os detalhes de uma resposta HTTP, como cabeçalhos e corpo, e os armazena para serem associados a um `HttpTraffic` ou `CoreLog`.

## Corpo da requisição

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

## Resposta de sucesso

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

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: `headers` ausentes).
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
