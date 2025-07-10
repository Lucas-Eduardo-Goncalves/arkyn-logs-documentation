---
title: Autenticar User
---

Esta funcionalidade permite que um usuário se autentique no sistema para obter acesso.

## Rota

`POST /user/auth`

## Descrição

A autenticação é realizada fornecendo o e-mail e a senha do usuário. Se as credenciais estiverem corretas, o sistema retorna um token de acesso (JWT) que deve ser usado em requisições subsequentes para rotas protegidas.

## Corpo da Requisição (Request Body)

| Campo      | Tipo   | Descrição          | Obrigatório |
| :--------- | :----- | :----------------- | :---------- |
| `email`    | string | E-mail do usuário. | Sim         |
| `password` | string | Senha do usuário.  | Sim         |

**Exemplo:**

```json
{
  "email": "usuario@example.com",
  "password": "senha_do_usuario"
}
```

## Resposta de Sucesso (Success Response)

**Código:** `200 OK`

**Conteúdo:**

| Campo   | Tipo   | Descrição                                |
| :------ | :----- | :--------------------------------------- |
| `token` | string | Token de acesso (JWT) para autenticação. |

**Exemplo:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: e-mail ou senha não fornecidos).
- **Código:** `401 Unauthorized`
  - **Motivo:** Credenciais inválidas (e-mail ou senha incorretos).
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
