---
title: Listar Traffic Sources
---

Esta funcionalidade permite obter uma lista de todas as fontes de tráfego associadas ao usuário autenticado.

## Rota

```bash
GET /traffic-source
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Retorna uma lista paginada das fontes de tráfego do usuário.

## Parâmetros de consulta

| Parâmetro | Tipo   | Descrição                                   | Padrão |
| :-------- | :----- | :------------------------------------------ | :----- |
| `page`    | number | Número da página a ser retornada.           | 1      |
| `limit`   | number | Quantidade de fontes de tráfego por página. | 10     |

## Resposta de sucesso

**Código:** `200 OK`

**Conteúdo:** Um objeto contendo a lista de fontes de tráfego e informações de paginação.

**Exemplo:**

```json
{
  "data": [
    {
      "id": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "name": "API de Pagamentos",
      "trafficDomain": "api.pagamentos.com",
      "userId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T11:00:00.000Z",
      "updatedAt": "2025-07-10T11:00:00.000Z"
    },
    {
      "id": "d2e3f4g5-h6i7-8901-2345-678901abcdef",
      "name": "Website Institucional",
      "trafficDomain": "meusite.com",
      "userId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "createdAt": "2025-07-09T16:00:00.000Z",
      "updatedAt": "2025-07-09T16:00:00.000Z"
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

- **Código:** `400 Bad Request`
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
