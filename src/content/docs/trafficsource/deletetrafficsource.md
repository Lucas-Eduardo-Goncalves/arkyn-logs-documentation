---
title: Deletar TrafficSource
---

Esta funcionalidade permite a remoção de uma fonte de tráfego existente do sistema.

## Rota

```bash
DELETE /traffic-source/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para deletar uma fonte de tráfego, é necessário fornecer o `trafficSourceId` como parâmetro na URL. O usuário só pode deletar fontes de tráfego que lhe pertencem. A exclusão de uma fonte de tráfego pode resultar na remoção em cascata de todos os dados associados (logs, domínios, etc.).

## Parâmetros da Rota

| Parâmetro         | Tipo   | Descrição                              | Obrigatório |
| :---------------- | :----- | :------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego a ser deletada. | Sim         |

## Resposta de sucesso

**Código:** `204 No Content`

**Conteúdo:** Nenhum conteúdo é retornado no corpo da resposta.

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** O `trafficSourceId` fornecido é inválido.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido ("Invalid token").
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para deletar esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhuma fonte de tráfego foi encontrada com o `trafficSourceId` fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
