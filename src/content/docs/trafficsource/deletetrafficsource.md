---
title: Deletar Traffic Source
---

Esta funcionalidade permite a remoção de uma fonte de tráfego existente do sistema.

## Rota

`DELETE /traffic-source/:trafficSourceId`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para deletar uma fonte de tráfego, é necessário fornecer o `trafficSourceId` como parâmetro na URL. A rota requer autenticação, e o usuário só pode deletar fontes de tráfego que lhe pertencem. A exclusão de uma fonte de tráfego pode resultar na remoção em cascata de todos os dados associados (logs, domínios, etc.).

## Parâmetros da Rota (Route Parameters)

| Parâmetro         | Tipo   | Descrição                              | Obrigatório |
| :---------------- | :----- | :------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego a ser deletada. | Sim         |

## Resposta de Sucesso (Success Response)

**Código:** `204 No Content`

**Conteúdo:** Nenhum conteúdo é retornado no corpo da resposta.

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** O `trafficSourceId` fornecido é inválido.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para deletar esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhuma fonte de tráfego foi encontrada com o `trafficSourceId` fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
