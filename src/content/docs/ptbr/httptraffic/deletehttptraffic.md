---
title: Deletar HttpTraffic
---

Esta funcionalidade permite a remoção de um registro de tráfego HTTP específico.

## Rota

```bash
DELETE /http-traffic/:httpTrafficId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Deleta um registro `HttpTraffic` com base no seu ID. A rota requer autenticação, e o usuário deve ter permissão sobre a `TrafficSource` à qual o registro pertence. Esta ação é geralmente reservada para fins de limpeza de dados ou administração.

## Parâmetros da rota

| Parâmetro       | Tipo   | Descrição                                 | Obrigatório |
| :-------------- | :----- | :---------------------------------------- | :---------- |
| `httpTrafficId` | string | ID do registro de tráfego a ser deletado. | Sim         |

## Resposta de sucesso

**Código:** `204 No Content`

**Conteúdo:** Nenhum conteúdo é retornado no corpo da resposta.

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** O `httpTrafficId` fornecido é inválido.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para deletar este registro.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhum registro `HttpTraffic` foi encontrado com o ID fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
