---
title: Deletar domain
---

Esta funcionalidade permite a remoção de um domínio existente do sistema.

## Rota

`DELETE /domain/:domainId`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para deletar um domínio, é necessário fornecer o `domainId` como parâmetro na URL. A rota requer autenticação, e o usuário deve ser o proprietário da `TrafficSource` à qual o domínio pertence. A exclusão de um domínio pode afetar os registros de log associados.

## Parâmetros da Rota (Route Parameters)

| Parâmetro  | Tipo   | Descrição                     | Obrigatório |
| :--------- | :----- | :---------------------------- | :---------- |
| `domainId` | string | ID do domínio a ser deletado. | Sim         |

## Resposta de Sucesso (Success Response)

**Código:** `204 No Content`

**Conteúdo:** Nenhum conteúdo é retornado no corpo da resposta.

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** O `domainId` fornecido é inválido.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para deletar este domínio.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhum domínio foi encontrado com o `domainId` fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
