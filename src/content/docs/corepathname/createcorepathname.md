---
title: Criar CorePathname
---

Esta funcionalidade permite o registro de um novo caminho de URL principal (template de rota) para uma fonte de tráfego.

## Rota

`POST /core-pathname/:trafficSourceId`

## Descrição

Cria um novo `CorePathname`. Esta rota é geralmente utilizada internamente pelo sistema ou por agentes de coleta que já realizaram a normalização da rota. Ela associa um template de rota a uma `TrafficSource`.

## Parâmetros da Rota (Route Parameters)

| Parâmetro         | Tipo   | Descrição               | Obrigatório |
| :---------------- | :----- | :---------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego. | Sim         |

## Corpo da Requisição (Request Body)

| Campo   | Tipo   | Descrição                                        | Obrigatório |
| :------ | :----- | :----------------------------------------------- | :---------- |
| `value` | string | O template da rota (ex: `/users/:userId/posts`). | Sim         |

**Exemplo:**

```json
{
  "value": "/api/v1/orders/:orderId"
}
```

## Resposta de Sucesso (Success Response)

**Código:** `201 Created`

**Conteúdo:** O objeto `CorePathname` que foi criado.

**Exemplo:**

```json
{
  "id": "l1m2n3o4-p5q6-7890-1234-567890abcdef",
  "value": "/api/v1/orders/:orderId",
  "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T18:00:00.000Z"
}
```

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para adicionar um `CorePathname` a esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` com o ID fornecido não foi encontrada.
- **Código:** `409 Conflict`
  - **Motivo:** Um `CorePathname` com este `value` já existe para esta `TrafficSource`.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
