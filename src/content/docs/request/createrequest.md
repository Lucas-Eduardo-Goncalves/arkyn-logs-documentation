---
title: Criar request
---

Esta funcionalidade é utilizada internamente pelo sistema para registrar os detalhes de uma requisição HTTP. Geralmente, não é uma rota exposta para ser consumida diretamente por usuários finais, mas sim por agentes de coleta de logs ou outras partes do sistema Arkyn Logs.

## Rota

`POST /request`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Cria um novo registro de `Request` no banco de dados. Esta rota recebe os detalhes de uma requisição HTTP, como cabeçalhos, corpo e parâmetros de consulta, e os armazena para futura associação com um `HttpTraffic` ou `CoreLog`.

## Corpo da Requisição (Request Body)

| Campo         | Tipo | Descrição                                    | Obrigatório |
| :------------ | :--- | :------------------------------------------- | :---------- |
| `headers`     | json | Objeto JSON com os cabeçalhos da requisição. | Sim         |
| `body`        | json | Objeto JSON com o corpo da requisição.       | Não         |
| `queryParams` | json | Objeto JSON com os parâmetros de consulta.   | Sim         |

**Exemplo:**

```json
{
  "headers": {
    "Content-Type": "application/json",
    "User-Agent": "MeuCliente/1.0"
  },
  "body": {
    "produtoId": 123,
    "quantidade": 2
  },
  "queryParams": {
    "source": "mobile"
  }
}
```

## Resposta de Sucesso (Success Response)

**Código:** `201 Created`

**Conteúdo:** O objeto da requisição criada, incluindo seu novo ID.

**Exemplo:**

```json
{
  "id": "i1j2k3l4-m5n6-7890-1234-567890abcdef",
  "headers": {
    "Content-Type": "application/json",
    "User-Agent": "MeuCliente/1.0"
  },
  "body": {
    "produtoId": 123,
    "quantidade": 2
  },
  "queryParams": {
    "source": "mobile"
  },
  "createdAt": "2025-07-10T16:00:00.000Z"
}
```

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: `headers` ou `queryParams` ausentes).
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
