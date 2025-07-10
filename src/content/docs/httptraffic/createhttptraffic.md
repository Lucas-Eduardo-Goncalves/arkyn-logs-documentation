---
title: Criar HttpTraffic
---

Esta funcionalidade é usada para criar um registro completo de tráfego HTTP. É uma rota central que une informações de várias entidades.

## Rota

`POST /http-traffic/:trafficSourceId`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Cria um novo registro de `HttpTraffic`. Esta rota é tipicamente chamada por um coletor de dados ou agente de monitoramento após uma transação HTTP ter sido concluída. Ela recebe todos os metadados da transação, juntamente com os IDs da `Request` and `Response` que já devem ter sido criados separadamente.

## Parâmetros da Rota (Route Parameters)

| Parâmetro         | Tipo   | Descrição               | Obrigatório |
| :---------------- | :----- | :---------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego. | Sim         |

## Corpo da Requisição (Request Body)

| Campo           | Tipo   | Descrição                                         | Obrigatório |
| :-------------- | :----- | :------------------------------------------------ | :---------- |
| `status`        | number | O código de status HTTP da resposta.              | Sim         |
| `method`        | string | O método HTTP da requisição (ex: "GET", "POST").  | Sim         |
| `elapsedTime`   | number | Tempo total da transação em milissegundos.        | Sim         |
| `trafficUserId` | string | ID do usuário da aplicação monitorada (opcional). | Não         |
| `domainId`      | string | ID do `Domain` onde a transação ocorreu.          | Sim         |
| `pathnameId`    | string | ID do `Pathname` da transação.                    | Sim         |
| `requestId`     | string | ID do registro de `Request` previamente criado.   | Sim         |
| `responseId`    | string | ID do registro de `Response` previamente criado.  | Sim         |

**Exemplo:**

```json
{
  "status": 201,
  "method": "POST",
  "elapsedTime": 150,
  "trafficUserId": "user-456",
  "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
  "pathnameId": "g1h2i3j4-k5l6-7890-1234-567890abcdef",
  "requestId": "i1j2k3l4-m5n6-7890-1234-567890abcdef",
  "responseId": "j1k2l3m4-n5o6-7890-1234-567890abcdef"
}
```

## Resposta de Sucesso (Success Response)

**Código:** `201 Created`

**Conteúdo:** O objeto `HttpTraffic` completo que foi criado.

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos.
- **Código:** `404 Not Found`
  - **Motivo:** Um dos IDs fornecidos (`trafficSourceId`, `domainId`, `pathnameId`, `requestId`, `responseId`) não foi encontrado.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
