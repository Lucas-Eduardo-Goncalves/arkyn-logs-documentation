---
title: Deletar pathname
---

Esta funcionalidade permite a remoção de um caminho de URL (`Pathname`) existente do sistema.

## Rota

```bash
DELETE /pathname/:pathnameId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para deletar um pathname, é necessário fornecer o `pathnameId` como parâmetro na URL. O usuário deve ser o proprietário da `TrafficSource` à qual o pathname pertence.

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
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para deletar este pathname.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhum pathname foi encontrado com o `pathnameId` fornecido.
  - **Motivo:** Nenhuma fonte de tráfego foi encontrada com o `trafficSourceId` pertencente ao pathname.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
