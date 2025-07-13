---
title: Entidade HttpTrafficRecord (Registro de tráfego HTTP)
---

O `HttpTrafficRecord` é uma visão (view) que consolida informações de várias entidades relacionadas para fornecer um registro completo e detalhado do tráfego HTTP. Ele não é uma tabela física no banco de dados, mas sim uma representação de dados agregados para facilitar consultas e análises.

## Estrutura

Um `HttpTrafficRecord` combina dados das seguintes entidades:

- `HttpTraffic`: O núcleo do registro, contendo informações como status, método, nível, tempo decorrido, etc.
- `Domain`: O domínio onde a requisição foi feita.
- `Pathname`: O caminho específico da URL acessado.
- `Request`: Detalhes da requisição, incluindo headers, body e query params.
- `Response`: Detalhes da resposta, incluindo headers e body.
- `TrafficSource`: A origem do tráfego.
- `User`: O usuário associado à fonte de tráfego.
