---
title: Listas pathnames
---

Esta funcionalidade permite obter uma lista de todos os caminhos de URL (`Pathname`) associados a um domínio específico.

## Rota

`GET /pathname/:trafficSourceId/:domainId`

## Descrição

Retorna uma lista paginada dos pathnames pertencentes ao `Domain` e à `TrafficSource` indicados na URL. A rota requer autenticação, e o usuário deve ser o proprietário dos recursos.

## Parâmetros da Rota (Route Parameters)

| Parâmetro         | Tipo   | Descrição                                  | Obrigatório |
| :---------------- | :----- | :----------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego.                    | Sim         |
| `domainId`        | string | ID do domínio do qual listar os pathnames. | Sim         |

## Parâmetros de Consulta (Query Parameters)

| Parâmetro | Tipo   | Descrição                           | Padrão |
| :-------- | :----- | :---------------------------------- | :----- |
| `page`    | number | Número da página a ser retornada.   | 1      |
| `limit`   | number | Quantidade de pathnames por página. | 10     |

## Resposta de Sucesso (Success Response)

**Código:** `200 OK`

**Conteúdo:** Um objeto contendo a lista de pathnames e informações de paginação.

**Exemplo:**

```json
{
  "data": [
    {
      "id": "g1h2i3j4-k5l6-7890-1234-567890abcdef",
      "value": "/dashboard",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T15:00:00.000Z"
    },
    {
      "id": "h2i3j4k5-l6m7-8901-2345-678901abcdef",
      "value": "/settings",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T15:02:00.000Z"
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
  - **Motivo:** O solicitante não tem permissão para ver os pathnames deste domínio.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` ou o `Domain` com os IDs fornecidos não foram encontrados.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
