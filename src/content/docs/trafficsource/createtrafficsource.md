---
title: Criar Traffic Source
---

Esta funcionalidade permite o cadastro de uma nova fonte de tráfego no sistema.

## Rota

```bash
POST /traffic-source`
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para criar uma nova fonte de tráfego, é necessário fornecer um nome e o domínio principal associado. A nova fonte de tráfego será associada ao usuário autenticado.

## Corpo da requisição

| Campo           | Tipo   | Descrição                                          | Obrigatório |
| :-------------- | :----- | :------------------------------------------------- | :---------- |
| `name`          | string | Nome descritivo para a fonte de tráfego.           | Sim         |
| `trafficDomain` | string | O domínio principal da aplicação a ser monitorada. | Sim         |

**Exemplo:**

```json
{
  "name": "API de Pagamentos",
  "trafficDomain": "api.pagamentos.com"
}
```

## Resposta de sucesso

**Código:** `201 Created`

**Conteúdo:** O objeto da fonte de tráfego criada.

**Exemplo:**

```json
{
  "id": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "name": "API de Pagamentos",
  "trafficDomain": "api.pagamentos.com",
  "userId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T11:00:00.000Z",
  "updatedAt": "2025-07-10T11:00:00.000Z"
}
```

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: campos obrigatórios ausentes).
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido ("Invalid token").
- **Código:** `404 Not found`
  - **Motivo:** O usuário autenticado informado não existe.
- **Código:** `409 Conflict`
  - **Motivo:** O domínio informado já está cadastrado em outra fonte de tráfego do mesmo.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
