---
title: Deletar pathname
---

Esta funcionalidade permite a remoção de um caminho de URL (`Pathname`) existente do sistema.

## Rota

`DELETE /pathname/:pathnameId`

## Descrição

Para deletar um pathname, é necessário fornecer o `pathnameId` como parâmetro na URL. A rota requer autenticação, e o usuário deve ser o proprietário da `TrafficSource` à qual o pathname pertence.

## Parâmetros da Rota (Route Parameters)

| Parâmetro    | Tipo   | Descrição                      | Obrigatório |
| :----------- | :----- | :----------------------------- | :---------- |
| `pathnameId` | string | ID do pathname a ser deletado. | Sim         |

## Resposta de Sucesso (Success Response)

**Código:** `204 No Content`

**Conteúdo:** Nenhum conteúdo é retornado no corpo da resposta.

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** O `pathnameId` fornecido é inválido.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para deletar este pathname.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhum pathname foi encontrado com o `pathnameId` fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
