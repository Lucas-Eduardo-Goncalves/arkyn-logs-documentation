---
title: Listar CorePathnames
---

Esta funcionalidade permite obter uma lista de todos os caminhos de URL principais (templates de rota) associados a uma fonte de tráfego.

## Rota

`GET /core-pathname/:trafficSourceId`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Retorna uma lista paginada dos `CorePathname`s pertencentes à `TrafficSource` indicada na URL. A rota requer autenticação.

## Parâmetros da Rota (Route Parameters)

| Parâmetro         | Tipo   | Descrição                                                 | Obrigatório |
| :---------------- | :----- | :-------------------------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego da qual listar os `CorePathname`s. | Sim         |

## Parâmetros de Consulta (Query Parameters)

| Parâmetro | Tipo   | Descrição                         | Padrão |
| :-------- | :----- | :-------------------------------- | :----- |
| `page`    | number | Número da página a ser retornada. | 1      |
| `limit`   | number | Quantidade de itens por página.   | 10     |

## Resposta de Sucesso (Success Response)

**Código:** `200 OK`

**Conteúdo:** Um objeto contendo a lista de `CorePathname`s e informações de paginação.

**Exemplo:**

```json
{
  "data": [
    {
      "id": "l1m2n3o4-p5q6-7890-1234-567890abcdef",
      "value": "/api/v1/orders/:orderId",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T18:00:00.000Z"
    },
    {
      "id": "m2n3o4p5-q6r7-8901-2345-678901abcdef",
      "value": "/api/v1/users/:userId",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T18:05:00.000Z"
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "limit": 10
  }
}
```

## Respostas de Erro (Error Responses)

- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para ver os `CorePathname`s desta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` com o ID fornecido não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
