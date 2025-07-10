---
title: Listar Users
---

Esta funcionalidade permite obter uma lista de todos os usuários cadastrados no sistema.

## Rota

`GET /user`

## Descrição

Retorna uma lista paginada de usuários. A rota requer autenticação e, geralmente, permissões de administrador para ser acessada. A resposta não inclui informações sensíveis como a senha dos usuários.

## Parâmetros de Consulta (Query Parameters)

| Parâmetro | Tipo   | Descrição                          | Padrão |
| :-------- | :----- | :--------------------------------- | :----- |
| `page`    | number | Número da página a ser retornada.  | 1      |
| `limit`   | number | Quantidade de usuários por página. | 10     |

## Resposta de Sucesso (Success Response)

**Código:** `200 OK`

**Conteúdo:** Um objeto contendo a lista de usuários e informações de paginação.

**Exemplo:**

```json
{
  "data": [
    {
      "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "name": "Usuário 1",
      "email": "usuario1@example.com",
      "utc": -3,
      "createdAt": "2025-07-10T10:00:00.000Z",
      "updatedAt": "2025-07-10T10:00:00.000Z"
    },
    {
      "id": "b2c3d4e5-f6g7-8901-2345-678901abcdef",
      "name": "Usuário 2",
      "email": "usuario2@example.com",
      "utc": 0,
      "createdAt": "2025-07-09T15:30:00.000Z",
      "updatedAt": "2025-07-09T15:30:00.000Z"
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "limit": 10
  }
}
```

## Respostas de Erro (Error Responses)

- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para listar usuários.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
