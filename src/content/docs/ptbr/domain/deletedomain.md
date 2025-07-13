---
title: Deletar domain
---

Esta funcionalidade permite a remoção de um domínio existente do sistema.

## Rota

```bash
DELETE /domain/:domainId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para deletar um domínio, é necessário fornecer o `domainId` como parâmetro na URL. O usuário deve ser o proprietário da `TrafficSource` à qual o domínio pertence. A exclusão de um domínio pode afetar os registros de log associados.

## Parâmetros da rota

| Parâmetro  | Tipo   | Descrição                     | Obrigatório |
| :--------- | :----- | :---------------------------- | :---------- |
| `domainId` | string | ID do domínio a ser deletado. | Sim         |

## Resposta de sucesso

**Código:** `204 No Content`

**Conteúdo:** Nenhum conteúdo é retornado no corpo da resposta.

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** O `domainId` fornecido é inválido.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para deletar este domínio.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhum domínio foi encontrado com o `domainId` fornecido.
  - **Motivo:** Nenhuma fonte de tráfego foi encontrada com o `trafficSourceId` pertencente ao domínio.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
