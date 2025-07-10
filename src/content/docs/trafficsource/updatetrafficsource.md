---
title: Atualizar TrafficSource
---

Esta funcionalidade permite a atualização dos dados de uma fonte de tráfego existente.

## Rota

`PUT /traffic-source/:trafficSourceId`

## Descrição

Para atualizar uma fonte de tráfego, é necessário fornecer o `trafficSourceId` como parâmetro na URL e os campos a serem atualizados no corpo da requisição. A rota requer autenticação, e o usuário só pode atualizar fontes de tráfego que lhe pertencem.

## Parâmetros da Rota (Route Parameters)

| Parâmetro         | Tipo   | Descrição                                | Obrigatório |
| :---------------- | :----- | :--------------------------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego a ser atualizada. | Sim         |

## Corpo da Requisição (Request Body)

Os campos são opcionais. Apenas os campos fornecidos serão atualizados.

| Campo           | Tipo   | Descrição                            |
| :-------------- | :----- | :----------------------------------- |
| `name`          | string | Novo nome para a fonte de tráfego.   |
| `trafficDomain` | string | Novo domínio principal da aplicação. |

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
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para atualizar esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** Nenhuma fonte de tráfego foi encontrada com o `trafficSourceId` fornecido.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
