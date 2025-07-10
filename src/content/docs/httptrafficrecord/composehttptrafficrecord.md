---
title: Compor Registro de Tráfego HTTP
---

Este endpoint é responsável por receber os dados de uma transação HTTP completa (requisição, resposta e metadados de tráfego) e compor um `HttpTrafficRecord` consolidado. Este processo é geralmente acionado por um evento interno após a finalização de uma requisição monitorada.

- **Método:** `POST`
- **URL:** `/http-traffic-record/:trafficSourceId`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Parâmetros da URL

| Parâmetro         | Tipo     | Obrigatório | Descrição                                  |
| ----------------- | -------- | ----------- | ------------------------------------------ |
| `trafficSourceId` | `string` | Sim         | O ID da fonte de tráfego (Traffic Source). |

## Corpo da Requisição

O corpo da requisição deve conter três objetos principais: `request`, `response`, e `httpTraffic`.

```json
{
  "request": {
    "id": "c290f1ee-6c54-4b01-90e6-d701748f0852",
    "headers": { "Content-Type": "application/json" },
    "body": { "name": "Test" },
    "queryParams": {}
  },
  "response": {
    "id": "d290f1ee-6c54-4b01-90e6-d701748f0853",
    "headers": { "Content-Type": "application/json" },
    "body": { "id": "new-id", "name": "Test" }
  },
  "httpTraffic": {
    "id": "e290f1ee-6c54-4b01-90e6-d701748f0854",
    "status": 201,
    "method": "POST",
    "level": "INFO",
    "trafficUserId": "user-123",
    "elapsedTime": 120,
    "domainId": "f290f1ee-6c54-4b01-90e6-d701748f0855",
    "pathnameId": "g290f1ee-6c54-4b01-90e6-d701748f0856",
    "requestId": "c290f1ee-6c54-4b01-90e6-d701748f0852",
    "responseId": "d290f1ee-6c54-4b01-90e6-d701748f0853"
  }
}
```

## Resposta de Sucesso

**Código:** `201 Created`

```json
{
  "statusCode": 201,
  "data": "Http traffic record composed successfully"
}
```

## Respostas de Erro

### Fonte de Tráfego não encontrada

- **Código:** `404 Not Found`
- **Resposta:**
  ```json
  {
    "statusCode": 404,
    "error": "Traffic Source not found"
  }
  ```

### Erro de Validação

- **Código:** `400 Bad Request`
- **Resposta:**
  ```json
  {
    "statusCode": 400,
    "error": "Validation error: 'request.id' is required."
  }
  ```

### Erro Interno do Servidor

- **Código:** `500 Internal Server Error`
- **Resposta:**
  ```json
  {
    "statusCode": 500,
    "error": "Internal Server Error"
  }
  ```
