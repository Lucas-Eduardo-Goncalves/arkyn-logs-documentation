---
title: Atualizar TrafficSource
---

Esta funcionalidade permite a atualização dos dados de uma fonte de tráfego existente.

## Rota

```bash
PUT /traffic-source/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para atualizar uma fonte de tráfego, é necessário fornecer o `trafficSourceId` como parâmetro na URL e os campos a serem atualizados no corpo da requisição. O usuário só pode atualizar fontes de tráfego que lhe pertencem.

## Parâmetros da rota

| Parâmetro         | Tipo   | Descrição                                | Obrigatório |
| :---------------- | :----- | :--------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego a ser atualizada. | Sim         |

## Corpo da requisição

Os campos são opcionais. Apenas os campos fornecidos serão atualizados.

| Campo           | Tipo   | Descrição                            | Obrigatório |
| :-------------- | :----- | :----------------------------------- | :---------- |
| `name`          | string | Novo nome para a fonte de tráfego.   | Não         |
| `trafficDomain` | string | Novo domínio principal da aplicação. | Não         |

**Exemplo:**

```json
{
  "name": "API de Pagamentos V2"
}
```

## Resposta de Sucesso (Success Response)

**Código:** `200 OK`

**Conteúdo:** O objeto da fonte de tráfego atualizada.

**Exemplo:**

```json
{
  "id": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "name": "API de Pagamentos V2",
  "trafficDomain": "api.pagamentos.com",
  "userId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T11:00:00.000Z",
  "updatedAt": "2025-07-10T13:00:00.000Z"
}
```

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para atualizar esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhuma fonte de tráfego foi encontrada com o `trafficSourceId` fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
