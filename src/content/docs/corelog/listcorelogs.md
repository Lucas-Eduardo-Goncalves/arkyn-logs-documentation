---
title: Listar Core Logs
---

Este endpoint permite a listagem de logs principais (Core Logs) associados a uma fonte de tráfego específica.

- **Método:** `GET`
- **URL:** `/core-log/:trafficSourceId`

## Parâmetros da URL

| Parâmetro         | Tipo     | Obrigatório | Descrição                                  |
| ----------------- | -------- | ----------- | ------------------------------------------ |
| `trafficSourceId` | `string` | Sim         | O ID da fonte de tráfego (Traffic Source). |

## Exemplo de Requisição

```bash
curl -X GET http://localhost:3000/core-log/d290f1ee-6c54-4b01-90e6-d701748f0851
```

## Resposta de Sucesso

**Código:** `200 OK`

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": "c290f1ee-6c54-4b01-90e6-d701748f0852",
      "title": "Log de Exemplo 1",
      "description": "Este é um log de exemplo.",
      "source": "Servidor A",
      "layer": "Aplicação",
      "stack": "...",
      "createdAt": "2024-06-12T10:00:00.000Z",
      "httpTrafficId": "b290f1ee-6c54-4b01-90e6-d701748f0853"
    },
    {
      "id": "e290f1ee-6c54-4b01-90e6-d701748f0854",
      "title": "Log de Exemplo 2",
      "description": "Este é outro log de exemplo.",
      "source": "Servidor B",
      "layer": "Banco de Dados",
      "stack": "...",
      "createdAt": "2024-06-12T10:05:00.000Z",
      "httpTrafficId": "b290f1ee-6c54-4b01-90e6-d701748f0853"
    }
  ]
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
    "error": "Validation error: 'trafficSourceId' must be a valid UUID."
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
