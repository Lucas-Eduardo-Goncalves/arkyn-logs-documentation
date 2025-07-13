---
title: Compor Registro de Tráfego HTTP
---

Este endpoint é responsável por receber os dados de uma transação HTTP completa (requisição, resposta e metadados de tráfego) e compor um `HttpTrafficRecord` consolidado. Este processo é geralmente acionado por um evento interno após a finalização de uma requisição monitorada.

## Rota

```bash
POST /http-traffic-record/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Parâmetros da rota

| Parâmetro         | Tipo     | Obrigatório | Descrição                                  |
| ----------------- | -------- | ----------- | ------------------------------------------ |
| `trafficSourceId` | `string` | Sim         | O ID da fonte de tráfego (Traffic Source). |

## Corpo da Requisição

O corpo da requisição deve ser um objeto JSON contendo os seguintes campos:

| Parâmetro         | Tipo     | Obrigatório | Descrição                                                                                 |
| ----------------- | -------- | ----------- | ----------------------------------------------------------------------------------------- |
| `domainUrl`       | `string` | Sim         | A URL do domínio. Deve ser uma URL válida.                                                |
| `pathnameUrl`     | `string` | Sim         | O caminho da URL. Deve começar com `/`.                                                   |
| `trafficSourceId` | `string` | Sim         | O ID da fonte de tráfego (Traffic Source). Deve ser um UUID válido.                       |
| `status`          | `number` | Sim         | O código de status HTTP da resposta. Deve ser um número inteiro.                          |
| `protocol`        | `string` | Sim         | O protocolo utilizado. Valores permitidos: `HTTP`, `HTTPS`.                               |
| `method`          | `string` | Sim         | O método HTTP da requisição. Valores permitidos: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`. |
| `trafficUserId`   | `string` | Não         | O ID do usuário de tráfego associado. Se fornecido, deve ser um UUID válido.              |
| `elapsedTime`     | `number` | Sim         | O tempo decorrido para a transação em milissegundos. Deve ser um número não negativo.     |
| `requestHeaders`  | `object` | Sim         | Um objeto contendo os cabeçalhos da requisição.                                           |
| `requestBody`     | `object` | Não         | Um objeto contendo o corpo da requisição. Pode ser nulo.                                  |
| `queryParams`     | `object` | Sim         | Um objeto contendo os parâmetros de consulta da requisição.                               |
| `responseHeaders` | `object` | Sim         | Um objeto contendo os cabeçalhos da resposta.                                             |
| `responseBody`    | `object` | Não         | Um objeto contendo o corpo da resposta. Pode ser nulo.                                    |

**Exemplo:**

```json
{
  "domainUrl": "https://api.example.com",
  "pathnameUrl": "/users",
  "trafficSourceId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "status": 201,
  "protocol": "HTTPS",
  "method": "POST",
  "trafficUserId": "f0e9d8c7-b6a5-4321-fedc-ba9876543210",
  "elapsedTime": 150,
  "requestHeaders": {
    "Content-Type": "application/json",
    "Authorization": "Bearer ..."
  },
  "requestBody": {
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  },
  "queryParams": {},
  "responseHeaders": {
    "Content-Type": "application/json"
  },
  "responseBody": {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "createdAt": "2024-06-12T16:00:00.000Z"
  }
}
```

## Resposta de Sucesso

**Código:** `201 Created`

**Conteúdo:** O objeto `HttpTrafficRecord` que foi criado.

**Exemplo:**

```json
{
  "id": "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
  "status": 201,
  "method": "POST",
  "level": "INFO",
  "elapsedTime": 150,
  "createdAt": "2024-06-12T16:00:00.000Z",
  "domain": "api.example.com",
  "pathname": "/users",
  "request": {
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer ..."
    },
    "body": {
      "name": "Jane Doe",
      "email": "jane.doe@example.com"
    },
    "queryParams": {}
  },
  "response": {
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "createdAt": "2024-06-12T16:00:00.000Z"
    }
  }
}
```

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: campo obrigatório ausente, formato de URL inválido, UUID inválido).
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado ou o token fornecido é inválido.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para adicionar um domínio a esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` com o `trafficSourceId` fornecido não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
