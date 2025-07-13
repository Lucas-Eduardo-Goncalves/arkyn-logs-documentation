---
title: Criar pathname
---

Esta funcionalidade permite o cadastro de um novo caminho de URL (`Pathname`) associado a um domínio e a uma fonte de tráfego.

## Rota

```bash
POST /pathname/:trafficSourceId/:domainId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para criar um novo pathname, é necessário fornecer o `trafficSourceId` e o `domainId` na URL, e o valor do caminho no corpo da requisição. O usuário deve ser o proprietário da `TrafficSource` especificado.

## Parâmetros da rota

| Parâmetro         | Tipo   | Descrição                                  | Obrigatório |
| :---------------- | :----- | :----------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego.                    | Sim         |
| `domainId`        | string | ID do domínio ao qual o pathname pertence. | Sim         |

## Corpo da requisição

| Campo   | Tipo   | Descrição                               | Obrigatório |
| :------ | :----- | :-------------------------------------- | :---------- |
| `value` | string | O caminho da URL (ex: `/products/123`). | Sim         |

**Exemplo:**

```json
{
  "value": "/dashboard"
}
```

## Resposta de sucesso

**Código:** `201 Created`

**Conteúdo:** O objeto do pathname criado.

**Exemplo:**

```json
{
  "id": "g1h2i3j4-k5l6-7890-1234-567890abcdef",
  "value": "/dashboard",
  "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T15:00:00.000Z"
}
```

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para adicionar um pathname a este domínio.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` ou o `Domain` com os IDs fornecidos não foram encontrados.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
