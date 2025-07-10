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

- **TrafficSource**: Cada `Domain` pertence a uma única `TrafficSource`.
- **Pathname**: Um `Domain` pode ter vários `Pathname` (caminhos de URL) associados a ele.
- **HttpTraffic**: Armazena os registros de tráfego HTTP (`HttpTraffic`) que ocorreram nesse domínio específico.

## Importância no Sistema

A entidade `Domain` é importante para:

1.  **Granularidade**: Permitir que o usuário separe os logs de diferentes subdomínios ou domínios que fazem parte da mesma `TrafficSource`. Por exemplo, separar os logs do "blog.meusite.com" dos logs de "app.meusite.com".
2.  **Contexto Técnico**: Registrar o protocolo (`HTTP`/`HTTPS`) adiciona um contexto técnico importante para a análise do tráfego.
3.  **Filtragem e Análise**: Facilita a criação de filtros e visualizações que focam em um domínio específico, ajudando a identificar problemas ou analisar o comportamento de uma parte da aplicação.

Em resumo, `Domain` ajuda a subdividir uma `TrafficSource` em unidades menores e mais gerenciáveis, refletindo a arquitetura real da aplicação que está sendo monitorada.
