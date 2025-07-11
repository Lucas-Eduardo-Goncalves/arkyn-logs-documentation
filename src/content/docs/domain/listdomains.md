---
title: Listar domains
---

Esta funcionalidade permite obter uma lista de todos os domínios associados a uma fonte de tráfego (`TrafficSource`) específica.

## Rota

```bash
GET /domain/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Retorna uma lista paginada dos domínios pertencentes à `TrafficSource` indicada na URL. O usuário deve ser o proprietário da fonte de tráfego.

## Parâmetros da rota

| Parâmetro         | Tipo   | Descrição                                          | Obrigatório |
| :---------------- | :----- | :------------------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego da qual listar os domínios. | Sim         |

## Parâmetros de consulta

| Parâmetro | Tipo   | Descrição                          | Padrão |
| :-------- | :----- | :--------------------------------- | :----- |
| `page`    | number | Número da página a ser retornada.  | 1      |
| `limit`   | number | Quantidade de domínios por página. | 10     |

## Resposta de sucesso

**Código:** `200 OK`

**Conteúdo:** Um objeto contendo a lista de domínios e informações de paginação.

**Exemplo:**

```json
{
  "data": [
    {
      "id": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
      "value": "app.meusite.com",
      "protocol": "HTTPS",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T14:00:00.000Z"
    },
    {
      "id": "f2g3h4i5-j6k7-8901-2345-678901abcdef",
      "value": "api.meusite.com",
      "protocol": "HTTP",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T14:05:00.000Z"
    }
  ],
  "meta": {
    "total": 2,
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
  - **Motivo:** O solicitante não tem permissão para ver os domínios desta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` com o ID fornecido não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
