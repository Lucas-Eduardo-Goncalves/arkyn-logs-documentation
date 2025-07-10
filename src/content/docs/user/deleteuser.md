---
title: Deletar User
---

Esta funcionalidade permite a remoção de um usuário existente do sistema.

## Rota

`DELETE /user/:userId`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para deletar um usuário, é necessário fornecer o `userId` como parâmetro na URL. A rota requer autenticação, ou seja, o solicitante deve ter permissão para realizar esta ação. Ao deletar um usuário, todos os dados associados a ele (como fontes de tráfego) também podem ser afetados, dependendo das regras de negócio de exclusão em cascata.

## Parâmetros da Rota (Route Parameters)

| Parâmetro | Tipo   | Descrição                     | Obrigatório |
| :-------- | :----- | :---------------------------- | :---------- |
| `userId`  | string | ID do usuário a ser deletado. | Sim         |

## Resposta de Sucesso (Success Response)

**Código:** `204 No Content`

**Conteúdo:** Nenhum conteúdo é retornado no corpo da resposta.

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** O `userId` fornecido é inválido.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para deletar o usuário.
- **Código:** `4404 Not Found`
  - **Motivo:** Nenhum usuário foi encontrado com o `userId` fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
