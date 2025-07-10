---
title: Listar HttpTraffics
---

Esta funcionalidade permite buscar e listar os registros de tráfego HTTP de uma determinada fonte de tráfego, com várias opções de filtro.

## Rota

`GET /http-traffic/:trafficSourceId`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Retorna uma lista paginada e filtrada de registros `HttpTraffic`. A rota requer autenticação, e o usuário só pode acessar dados de fontes de tráfego que lhe pertencem.

## Parâmetros da Rota (Route Parameters)

| Parâmetro         | Tipo   | Descrição                            | Obrigatório |
| :---------------- | :----- | :----------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego para a busca. | Sim         |

## Parâmetros de Consulta (Query Parameters)

Esta rota suporta uma variedade de filtros para refinar a busca:

| Parâmetro       | Tipo   | Descrição                                                   |
| :-------------- | :----- | :---------------------------------------------------------- |
| `page`          | number | Número da página (padrão: 1).                               |
| `limit`         | number | Itens por página (padrão: 10).                              |
| `startDate`     | string | Data de início no formato ISO (ex: "2025-07-10T00:00:00Z"). |
| `endDate`       | string | Data de fim no formato ISO (ex: "2025-07-10T23:59:59Z").    |
| `domainId`      | string | Filtra por um ID de domínio específico.                     |
| `pathnameId`    | string | Filtra por um ID de pathname específico.                    |
| `method`        | string | Filtra por um método HTTP (ex: "GET", "POST").              |
| `status`        | number | Filtra por um código de status HTTP.                        |
| `level`         | string | Filtra por nível de log ("INFO", "WARNING", "FATAL").       |
| `trafficUserId` | string | Filtra por um ID de usuário da aplicação monitorada.        |

## Resposta de Sucesso (Success Response)

**Código:** `200 OK`

**Conteúdo:** Um objeto contendo a lista de `HttpTraffic` e informações de paginação.

**Exemplo:**

```json
{
  "data": [
    {
      "id": "k1l2m3n4-o5p6-7890-1234-567890abcdef",
      "status": 201,
      "method": "POST",
      "level": "INFO",
      "elapsedTime": 150,
      "trafficUserId": "user-456",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
      "pathnameId": "g1h2i3j4-k5l6-7890-1234-567890abcdef",
      "requestId": "i1j2k3l4-m5n6-7890-1234-567890abcdef",
      "responseId": "j1k2l3m4-n5o6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T17:00:00.000Z"
    }
  ],
  "meta": {
    "total": 1,
    "page": 1,
    "limit": 10
  }
}
```

## Respostas de Erro (Error Responses)

- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para acessar esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
