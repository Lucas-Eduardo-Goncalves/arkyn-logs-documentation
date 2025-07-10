---
title: Deletar HttpTraffic
---

Esta funcionalidade permite a remoção de um registro de tráfego HTTP específico.

## Rota

`DELETE /http-traffic/:httpTrafficId`

## Descrição

Deleta um registro `HttpTraffic` com base no seu ID. A rota requer autenticação, e o usuário deve ter permissão sobre a `TrafficSource` à qual o registro pertence. Esta ação é geralmente reservada para fins de limpeza de dados ou administração.

## Parâmetros da Rota (Route Parameters)

| Parâmetro       | Tipo   | Descrição                                 | Obrigatório |
| :-------------- | :----- | :---------------------------------------- | :---------- |
| `httpTrafficId` | string | ID do registro de tráfego a ser deletado. | Sim         |

## Resposta de Sucesso (Success Response)

**Código:** `204 No Content`

**Conteúdo:** Nenhum conteúdo é retornado no corpo da resposta.

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** O `httpTrafficId` fornecido é inválido.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para deletar este registro.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhum registro `HttpTraffic` foi encontrado com o ID fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
