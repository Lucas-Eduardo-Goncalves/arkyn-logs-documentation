---
title: Criar User
---

Esta funcionalidade permite o cadastro de um novo usuário no sistema.

## Rota

`POST /user`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para criar um novo usuário, é necessário fornecer nome, e-mail, senha e fuso horário (UTC). O sistema validará os dados e, se estiverem corretos, criará um novo registro de usuário.

## Corpo da Requisição (Request Body)

| Campo      | Tipo   | Descrição                                    | Obrigatório |
| :--------- | :----- | :------------------------------------------- | :---------- |
| `name`     | string | Nome do usuário.                             | Sim         |
| `email`    | string | E-mail do usuário (deve ser único).          | Sim         |
| `password` | string | Senha do usuário.                            | Sim         |
| `utc`      | number | Fuso horário do usuário (ex: -3 para GMT-3). | Sim         |

**Exemplo:**

```json
{
  "name": "Novo Usuário",
  "email": "novo.usuario@example.com",
  "password": "senha_forte_123",
  "utc": -3
}
```

## Resposta de Sucesso (Success Response)

**Código:** `201 Created`

**Conteúdo:** O objeto do usuário criado, sem a senha.

**Exemplo:**

```json
{
  "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "name": "Novo Usuário",
  "email": "novo.usuario@example.com",
  "utc": -3,
  "createdAt": "2025-07-10T10:00:00.000Z",
  "updatedAt": "2025-07-10T10:00:00.000Z"
}
```

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: campos obrigatórios ausentes, e-mail em formato inválido).
- **Código:** `409 Conflict`
  - **Motivo:** O e-mail fornecido já está em uso por outro usuário.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
