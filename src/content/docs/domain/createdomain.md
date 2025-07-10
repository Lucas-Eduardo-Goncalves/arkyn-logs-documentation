---
title: Criar domain
---

Esta funcionalidade permite o cadastro de um novo domínio associado a uma fonte de tráfego (`TrafficSource`).

## Rota

`POST /domain/:trafficSourceId`

## Descrição

Para criar um novo domínio, é necessário fornecer o `trafficSourceId` na URL, e o valor do domínio e o protocolo no corpo da requisição. A rota requer autenticação, e o usuário deve ser o proprietário da `TrafficSource` especificada.

## Parâmetros da Rota (Route Parameters)

| Parâmetro         | Tipo   | Descrição                                         | Obrigatório |
| :---------------- | :----- | :------------------------------------------------ | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego à qual o domínio pertence. | Sim         |

## Corpo da Requisição (Request Body)

| Campo      | Tipo   | Descrição                                   | Obrigatório |
| :--------- | :----- | :------------------------------------------ | :---------- |
| `value`    | string | O nome do domínio (ex: "api.example.com").  | Sim         |
| `protocol` | string | O protocolo do domínio (`HTTP` ou `HTTPS`). | Sim         |

**Exemplo:**

```json
{
  "value": "app.meusite.com",
  "protocol": "HTTPS"
}
```

## Resposta de Sucesso (Success Response)

**Código:** `201 Created`

**Conteúdo:** O objeto do domínio criado.

**Exemplo:**

```json
{
  "id": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
  "value": "app.meusite.com",
  "protocol": "HTTPS",
  "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T14:00:00.000Z"
}
```

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: campos obrigatórios ausentes, protocolo inválido).
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para adicionar um domínio a esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` com o ID fornecido não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
