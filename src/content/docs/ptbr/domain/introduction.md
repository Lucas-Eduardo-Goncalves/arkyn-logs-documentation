---
title: Entidade Domain (Domínio)
---

A entidade `Domain` representa os domínios e subdomínios específicos que estão sendo monitorados dentro de uma `TrafficSource` (Fonte de Tráfego). Ela permite um nível mais granular de organização e filtragem dos logs.

## Atributos Principais

- **id**: Identificador único para cada domínio.
- **value**: O nome do domínio (ex: "meusite.com", "api.meusite.com").
- **protocol**: O protocolo usado pelo domínio (`HTTP` ou `HTTPS`).
- **trafficSourceId**: A chave estrangeira que vincula o domínio a uma `TrafficSource`.
- **createdAt**: Data e hora de criação do registro.

## Relacionamentos

- [**TrafficSource**](/trafficsource/introduction): Cada `Domain` pertence a uma única `TrafficSource`.
- [**Pathname**](/pathname/introduction): Um `Domain` pode ter vários `Pathname` (caminhos de URL) associados a ele.
- [**HttpTraffic**](/httptraffic/introduction): Armazena os registros de tráfego HTTP (`HttpTraffic`) que ocorreram nesse domínio específico.

Em resumo, `Domain` ajuda a subdividir uma `TrafficSource` em unidades menores e mais gerenciáveis, refletindo a arquitetura real da aplicação que está sendo monitorada.
