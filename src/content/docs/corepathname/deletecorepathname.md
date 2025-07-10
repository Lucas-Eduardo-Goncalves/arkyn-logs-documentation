---
title: Deletar CorePathname
---

Esta funcionalidade permite a remoção de um caminho de URL principal (`CorePathname`) do sistema.

## Rota

`DELETE /core-pathname/:corePathnameId`

## Descrição

Deleta um `CorePathname` com base no seu ID. A rota requer autenticação, e o usuário deve ser o proprietário da `TrafficSource` à qual o `CorePathname` pertence. Esta é uma operação administrativa e pode impactar a forma como novos logs e exceções são agrupados.

## Parâmetros da Rota (Route Parameters)

| Parâmetro        | Tipo   | Descrição                            | Obrigatório |
| :--------------- | :----- | :----------------------------------- | :---------- |
| `corePathnameId` | string | ID do `CorePathname` a ser deletado. | Sim         |

## Resposta de Sucesso (Success Response)

**Código:** `204 No Content`

**Conteúdo:** Nenhum conteúdo é retornado no corpo da resposta.

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** O `corePathnameId` fornecido é inválido.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para deletar este `CorePathname`.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhum `CorePathname` foi encontrado com o ID fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
