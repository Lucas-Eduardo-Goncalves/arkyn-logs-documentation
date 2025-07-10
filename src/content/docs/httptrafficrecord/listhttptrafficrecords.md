---
title: Listar Registros de Tráfego HTTP
---

Este endpoint permite a listagem de registros de tráfego HTTP (`HttpTrafficRecord`) associados a uma fonte de tráfego específica, com opções de paginação e filtros.

- **Método:** `GET`
- **URL:** `/http-traffic-record/:trafficSourceId`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Parâmetros da URL

| Parâmetro         | Tipo     | Obrigatório | Descrição                                  |
| ----------------- | -------- | ----------- | ------------------------------------------ |
| `trafficSourceId` | `string` | Sim         | O ID da fonte de tráfego (Traffic Source). |

## Query Params (Filtros e Paginação)

| Parâmetro   | Tipo     | Obrigatório | Descrição                                                               | Exemplo                           |
| ----------- | -------- | ----------- | ----------------------------------------------------------------------- | --------------------------------- |
| `page`      | `number` | Não         | O número da página para a paginação. O padrão é `1`.                    | `?page=2`                         |
| `limit`     | `number` | Não         | O número de itens por página. O padrão é `10`.                          | `?limit=20`                       |
| `method`    | `string` | Não         | Filtra os registros pelo método HTTP (ex: `GET`, `POST`).               | `?method=POST`                    |
| `status`    | `number` | Não         | Filtra os registros pelo código de status HTTP.                         | `?status=404`                     |
| `level`     | `string` | Não         | Filtra os registros pelo nível do log (ex: `INFO`, `WARNING`, `FATAL`). | `?level=FATAL`                    |
| `domain`    | `string` | Não         | Filtra os registros por um domínio específico.                          | `?domain=api.example.com`         |
| `pathname`  | `string` | Não         | Filtra os registros por um caminho de URL específico.                   | `?pathname=/users`                |
| `startDate` | `string` | Não         | Filtra registros a partir de uma data de início (formato ISO 8601).     | `?startDate=2024-01-01T00:00:00Z` |
| `endDate`   | `string` | Não         | Filtra registros até uma data de fim (formato ISO 8601).                | `?endDate=2024-01-31T23:59:59Z`   |

## Exemplo de Requisição

```bash
curl -X GET "http://localhost:3000/http-traffic-record/d290f1ee-6c54-4b01-90e6-d701748f0851?page=1&limit=1&level=INFO"
```

## Resposta de Sucesso

**Código:** `200 OK`

```json
{
  "statusCode": 200,
  "data": {
    "result": [
      {
        "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        "status": 200,
        "method": "GET",
        "level": "INFO",
        "elapsedTime": 50,
        "createdAt": "2024-06-12T15:30:00.000Z",
        "domain": "api.example.com",
        "pathname": "/users",
        "request": {
          "headers": { "Authorization": "Bearer ..." },
          "body": null,
          "queryParams": { "page": "1" }
        },
        "response": {
          "headers": { "Content-Type": "application/json" },
          "body": [{ "id": 1, "name": "John Doe" }]
        }
      }
    ],
    "total": 1,
    "limit": 1,
    "page": 1
  }
}
```

## Respostas de Erro

### Fonte de Tráfego não encontrada

- **Código:** `404 Not Found`
- **Resposta:**
  ```json
  {
    "statusCode": 404,
    "error": "Traffic Source not found"
  }
  ```

### Erro de Validação

- **Código:** `400 Bad Request`
- **Resposta:**
  ```json
  {
    "statusCode": 400,
    "error": "Validation error: 'page' must be a number."
  }
  ```

### Erro Interno do Servidor

- **Código:** `500 Internal Server Error`
- **Resposta:**
  ```json
  {
    "statusCode": 500,
    "error": "Internal Server Error"
  }
  ```
