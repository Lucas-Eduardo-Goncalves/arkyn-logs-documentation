---
title: Entidade HttpTraffic (Tráfego HTTP)
---

A entidade `HttpTraffic` é um dos registros de log mais completos do sistema. Ela consolida as informações de uma transação HTTP inteira, unindo dados da `Request`, da `Response`, e metadados sobre a performance e o contexto da transação.

## Atributos Principais

- **id**: Identificador único para o registro de tráfego.
- **status**: O código de status HTTP da resposta (ex: 200, 404, 500).
- **method**: O método HTTP da requisição (GET, POST, PUT, DELETE, etc.).
- **level**: O nível do log (`INFO`, `WARNING`, `FATAL`), geralmente derivado do `status`.
- **elapsedTime**: O tempo decorrido, em milissegundos, entre o início da requisição e o final da resposta.
- **trafficUserId**: Um identificador opcional para o usuário final da aplicação monitorada (não confundir com o `User` do Arkyn Logs).
- **trafficSourceId**: A chave estrangeira para a `TrafficSource`.
- **domainId**: A chave estrangeira para o `Domain`.
- **pathnameId**: A chave estrangeira para o `Pathname`.
- **requestId**: A chave estrangeira para a `Request` associada.
- **responseId**: A chave estrangeira para a `Response` associada.
- **createdAt**: Data e hora em que o registro de tráfego foi criado.

## Relacionamentos

- **TrafficSource**, **Domain**, **Pathname**: Contextualizam onde a transação ocorreu.
- **Request**: Contém todos os detalhes da requisição de entrada.
- **Response**: Contém todos os detalhes da resposta de saída.

## Importância no Sistema

O `HttpTraffic` é a espinha dorsal do monitoramento de logs de API e web. Ele permite:

1.  **Visão Completa**: Ter uma visão unificada de uma transação, desde a requisição até a resposta, incluindo quanto tempo demorou.
2.  **Monitoramento de Saúde (Health Monitoring)**: Acompanhar os `status` e `level` dos logs para identificar rapidamente picos de erros (4xx, 5xx).
3.  **Análise de Performance**: Usar o `elapsedTime` para identificar rotas lentas e gargalos de performance.
4.  **Rastreabilidade**: Conectar uma transação a uma fonte de tráfego, domínio e rota específicos, facilitando a filtragem e a busca.
5.  **Depuração Contextualizada**: Ao investigar um problema, o `HttpTraffic` fornece o ponto de partida, com links diretos para os detalhes da `Request` e `Response`.

Em resumo, `HttpTraffic` transforma dados brutos de requisição e resposta em um registro de log estruturado e enriquecido, que é a base para a maioria das análises e visualizações na plataforma Arkyn Logs.
