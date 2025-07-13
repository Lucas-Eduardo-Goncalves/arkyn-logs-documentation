---
title: Atualizar Webhook
---

Esta funcionalidade permite atualizar as configurações de webhook de uma fonte de tráfego específica.

## Rota

```bash
PUT /webhooks/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Permite atualizar as configurações de notificação do webhook associado a uma fonte de tráfego. Atualmente, é possível atualizar o ID do canal do Discord para onde as notificações serão enviadas.

## Parâmetros da rota

| Parâmetro         | Tipo   | Descrição                                       | Obrigatório |
| :---------------- | :----- | :---------------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego para atualizar o webhook | Sim         |

## Corpo da requisição

| Campo              | Tipo   | Descrição                                | Obrigatório |
| :----------------- | :----- | :--------------------------------------- | :---------- |
| `discordChannelId` | string | ID do canal do Discord para notificações | Não         |

**Exemplo:**

```json
{
  "discordChannelId": "987654321098765432"
}
```

**Para desabilitar notificações do Discord:**

```json
{
  "discordChannelId": null
}
```

## Resposta de sucesso

**Código:** `200 OK`

**Conteúdo:** O objeto do webhook atualizado.

**Exemplo:**

```json
{
  "id": "webhook-uuid-12345",
  "discordChannelId": "987654321098765432",
  "trafficSourceId": "12345678-1234-1234-1234-123456789abc",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-20T15:20:00.000Z"
}
```

## Respostas de erro

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para atualizar o webhook.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` com o ID fornecido não foi encontrada.
  - **Motivo:** O `Webhook` com o ID fornecido não foi encontrado.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
