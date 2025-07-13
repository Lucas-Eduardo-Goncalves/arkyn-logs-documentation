---
title: Listar Registros de Tráfego HTTP
---

Esta funcionalidade permite buscar e listar os registros de tráfego HTTP completos de uma determinada fonte de tráfego.

## Rota

```bash
GET /http-traffic-record/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Parâmetros da rota

| Parâmetro         | Tipo     | Obrigatório | Descrição                                  |
| ----------------- | -------- | ----------- | ------------------------------------------ |
| `trafficSourceId` | `string` | Sim         | O ID da fonte de tráfego (Traffic Source). |

## Parâmetros de consulta

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

## Resposta de Sucesso

**Código:** `200 OK`

**Conteúdo:** Um objeto contendo a lista de `HttpTrafficRecord` e informações de paginação.

**Exemplo:**

```json
{
  "data": [
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
  "meta": {
    "total": 1,
    "page": 1,
    "limit": 10
  }
}
```

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: trafficSourceId ausente).
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para acessar esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
