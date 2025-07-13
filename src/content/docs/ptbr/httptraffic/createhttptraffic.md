---
title: Criar HttpTraffic
---

Esta funcionalidade é usada para criar um registro completo de tráfego HTTP. É uma rota central que une informações de várias entidades.

## Rota

```bash
POST /http-traffic/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Cria um novo registro de `HttpTraffic`. Esta rota é tipicamente chamada por um coletor de dados ou agente de monitoramento após uma transação HTTP ter sido concluída. Ela recebe todos os metadados da transação, juntamente com os IDs da `Request` and `Response` que já devem ter sido criados separadamente.

## Parâmetros da rota

| Parâmetro         | Tipo   | Descrição               | Obrigatório |
| :---------------- | :----- | :---------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego. | Sim         |

## Corpo da requisição

| Campo           | Tipo   | Descrição                                                   | Obrigatório |
| :-------------- | :----- | :---------------------------------------------------------- | :---------- |
| `status`        | number | O código de status HTTP da resposta.                        | Sim         |
| `method`        | string | O método HTTP da requisição (ex: "GET", "POST").            | Sim         |
| `elapsedTime`   | number | Tempo total da transação em milissegundos.                  | Sim         |
| `trafficUserId` | string | ID do usuário da aplicação monitorada (opcional).           | Não         |
| `domainId`      | string | ID do `Domain` onde a transação ocorreu previamente criado. | Sim         |
| `pathnameId`    | string | ID do `Pathname` da transação previamente criado.           | Sim         |
| `requestId`     | string | ID do registro de `Request` previamente criado.             | Sim         |
| `responseId`    | string | ID do registro de `Response` previamente criado.            | Sim         |

**Exemplo:**

```json
{
  "status": 201,
  "method": "POST",
  "elapsedTime": 150,
  "trafficUserId": "user-456", // or null
  "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
  "pathnameId": "g1h2i3j4-k5l6-7890-1234-567890abcdef",
  "requestId": "i1j2k3l4-m5n6-7890-1234-567890abcdef",
  "responseId": "j1k2l3m4-n5o6-7890-1234-567890abcdef"
}
```

## Resposta de sucesso

**Código:** `201 Created`

**Conteúdo:** O objeto `HttpTraffic` completo que foi criado.

**Exemplo:**

```json
{
  "id": "e1f2g3h4-0dbc-7ee5-a251-d67a4ce4bfe4",
  "status": 200,
  "method": "GET",
  "level": "INFO",
  "elapsedTime": 456,
  "trafficUserId": null,
  "trafficSourceId": "0197548f-0e8e-7550-b283-f26fd98a9423",
  "domainId": "e1f2g3h4-0a74-7ee5-a251-b0b4056b9cd3",
  "pathnameId": "e1f2g3h4-0bce-7ee5-a251-bcc902f86bb4",
  "requestId": "e1f2g3h4-0c1b-7ee5-a251-c1425617699b",
  "responseId": "e1f2g3h4-0c1c-7ee5-a251-c9b04e69aba9",
  "createdAt": "06/11/2025 at 15:27:01"
},
```

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos.
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para adicionar um domínio a esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** Um dos IDs fornecidos (`trafficSourceId`, `domainId`, `pathnameId`, `requestId`, `responseId`) não foi encontrado.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
