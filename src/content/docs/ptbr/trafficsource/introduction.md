---
title: Entidade TrafficSource (Fonte de Tráfego)
---

A entidade `TrafficSource` (Fonte de Tráfego) representa a origem dos logs e eventos monitorados pelo Arkyn. Cada `TrafficSource` está associada a um `User` e funciona como um contêiner para agrupar dados de uma aplicação, serviço ou sistema específico.

## Atributos principais

- **id**: Identificador único para cada fonte de tráfego.
- **name**: Nome descritivo para a fonte de tráfego (ex: "API de Produção", "Website Institucional").
- **trafficDomain**: O domínio principal associado a esta fonte de tráfego.
- **userId**: A chave estrangeira que vincula a fonte de tráfego a um `User`.
- **createdAt**: Data e hora de criação do registro.
- **updatedAt**: Data e hora da última atualização do registro.

## Relacionamentos

A `TrafficSource` é uma entidade central que se conecta a várias outras partes do sistema:

- [**User**](/ptbr/user/introduction): Cada fonte de tráfego pertence a um único usuário.
- [**Domain**](/ptbr/domain/introduction): Uma `TrafficSource` pode ter vários `Domain` (domínios) associados.
- [**Pathname**](/ptbr/pathname/introduction): Agrupa todos os `Pathname` (caminhos de URL) registrados sob esta fonte.
- [**HttpTraffic**](/ptbr/httptraffic/introduction): Armazena os registros de tráfego HTTP (`HttpTraffic`) gerados.
- [**CorePathname**](/ptbr/corepathname/introduction): Mantém os caminhos de URL principais (`CorePathname`) para agregação de logs.
- [**CoreLog**](/ptbr/corelog/introduction): Consolida os logs principais (`CoreLog`).

## Resumo

Em resumo, a `TrafficSource` atua como um "projeto" ou "workspace" dentro do Arkyn Logs, garantindo que os dados de diferentes fontes sejam mantidos organizados e separados.
