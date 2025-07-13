---
title: Listar Webhook
---

Esta funcionalidade permite consultar as configurações de webhook de uma fonte de tráfego específica.

## Rota

```bash
GET /webhooks/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Retorna as configurações de webhook associadas a uma fonte de tráfego específica. O usuário autenticado deve ser o proprietário da fonte de tráfego para ter acesso às informações do webhook.

## Parâmetros da rota

| Parâmetro         | Tipo   | Descrição                                       | Obrigatório |
| :---------------- | :----- | :---------------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego para consultar o webhook | Sim         |

## Resposta de sucesso

**Código:** `200 OK`

**Conteúdo:** O objeto do webhook encontrado.

**Exemplo:**

```json
{
  "id": "webhook-uuid-12345",
  "discordChannelId": "987654321098765432",
  "trafficSourceId": "12345678-1234-1234-1234-123456789abc",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-20T14:45:00.000Z"
}
```

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** O `trafficSourceId` fornecido é inválido.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para ver o webhook.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` com o ID fornecido não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
