---
title: Criar CoreLog
---

Esta funcionalidade é usada para criar um registro de log principal, que já está associado a um `CorePathname`.

## Rota

`POST /core-log/:trafficSourceId`

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

**Exemplo de cabeçalho:**

```
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Cria um novo registro de `CoreLog`. Esta rota é tipicamente chamada por um processo interno ou agente que já identificou a qual `CorePathname` a transação pertence. Ela armazena uma versão agregável do log.

## Parâmetros da Rota (Route Parameters)

| Parâmetro         | Tipo   | Descrição               | Obrigatório |
| :---------------- | :----- | :---------------------- | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego. | Sim         |

## Corpo da Requisição (Request Body)

| Campo            | Tipo   | Descrição                                         | Obrigatório |
| :--------------- | :----- | :------------------------------------------------ | :---------- |
| `status`         | number | O código de status HTTP da resposta.              | Sim         |
| `method`         | string | O método HTTP da requisição.                      | Sim         |
| `elapsedTime`    | number | Tempo total da transação em milissegundos.        | Sim         |
| `trafficUserId`  | string | ID do usuário da aplicação monitorada (opcional). | Não         |
| `corePathnameId` | string | ID do `CorePathname` ao qual este log pertence.   | Sim         |
| `requestId`      | string | ID do registro de `Request` previamente criado.   | Sim         |
| `responseId`     | string | ID do registro de `Response` previamente criado.  | Sim         |

**Exemplo:**

```json
{
  "status": 500,
  "method": "PUT",
  "elapsedTime": 320,
  "corePathnameId": "l1m2n3o4-p5q6-7890-1234-567890abcdef",
  "requestId": "p1q2r3s4-t5u6-7890-1234-567890abcdef",
  "responseId": "q1r2s3t4-u5v6-7890-1234-567890abcdef"
}
```

## Resposta de Sucesso (Success Response)

**Código:** `201 Created`

**Conteúdo:** O objeto `CoreLog` completo que foi criado.

## Respostas de Erro (Error Responses)

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos.
- **Código:** `404 Not Found`
  - **Motivo:** Um dos IDs fornecidos (`trafficSourceId`, `corePathnameId`, `requestId`, `responseId`) não foi encontrado.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
