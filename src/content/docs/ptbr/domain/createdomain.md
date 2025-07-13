---
title: Criar domain
---

Esta funcionalidade permite o cadastro de um novo domínio associado a uma fonte de tráfego (`TrafficSource`).

## Rota

```bash
POST /domain/:trafficSourceId
```

## Autenticação

Esta rota requer autenticação. É necessário incluir um token Bearer válido no cabeçalho `Authorization` da requisição. O token deve ser obtido através da [rota de autenticação de usuário](/ptbr/user/authuser/).

```bash
Authorization: Bearer <seu-token-aqui>
```

## Descrição

Para criar um novo domínio, é necessário fornecer o `trafficSourceId` na URL, e o valor do domínio e o protocolo no corpo da requisição. O usuário deve ser o proprietário da `TrafficSource` especificada.

Caso já haja um domínio igual cadastrado, não será criado um novo domínio e será retornado o domínio já existente.

## Parâmetros da rota

| Parâmetro         | Tipo   | Descrição                                         | Obrigatório |
| :---------------- | :----- | :------------------------------------------------ | :---------- |
| `trafficSourceId` | string | ID da fonte de tráfego à qual o domínio pertence. | Sim         |

## Corpo da requisição

| Campo      | Tipo   | Descrição                                   | Obrigatório |
| :--------- | :----- | :------------------------------------------ | :---------- |
| `value`    | string | O nome do domínio (ex: "api.example.com").  | Sim         |
| `protocol` | string | O protocolo do domínio (`HTTP` ou `HTTPS`). | Sim         |

**Exemplo:**

```json
{
  "value": "app.meusite.com",
  "protocol": "HTTPS"
}
```

## Resposta de sucesso

**Código:** `201 Created`

**Conteúdo:** O objeto do domínio criado.

**Exemplo:**

```json
{
  "id": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
  "value": "app.meusite.com",
  "protocol": "HTTPS",
  "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T14:00:00.000Z"
}
```

## Respostas de erro

- **Código:** `400 Bad Request`
  - **Motivo:** Dados de entrada inválidos (ex: campos obrigatórios ausentes, protocolo inválido).
  - **Motivo:** Ausência do token de autenticação.
- **Código:** `401 Unauthorized`
  - **Motivo:** O solicitante não está autenticado.
  - **Motivo:** O token fornecido é inválido.
- **Código:** `403 Forbidden`
  - **Motivo:** O solicitante não tem permissão para adicionar um domínio a esta fonte de tráfego.
- **Código:** `404 Not Found`
  - **Motivo:** A `TrafficSource` com o ID fornecido não foi encontrada.
- **Código:** `500 Internal Server Error`
  - **Motivo:** Erro inesperado no servidor.
