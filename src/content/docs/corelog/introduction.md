---
title: Entidade CoreLog (Log Principal)
---

A entidade `CoreLog` é muito semelhante à `HttpTraffic`, mas com uma diferença fundamental: ela está associada a um `CorePathname` em vez de um `Pathname` individual. Isso significa que `CoreLog` representa um registro de log que já foi agregado no nível do template da rota.

## Atributos Principais

- **id**: Identificador único para o log principal.
- **status**: O código de status HTTP da resposta.
- **method**: O método HTTP da requisição.
- **level**: O nível do log (`INFO`, `WARNING`, `FATAL`).
- **elapsedTime**: O tempo decorrido da transação em milissegundos.
- **trafficUserId**: ID opcional do usuário da aplicação monitorada.
- **corePathnameId**: A chave estrangeira para o `CorePathname` (a principal diferença em relação ao `HttpTraffic`).
- **trafficSourceId**: A chave estrangeira para a `TrafficSource`.
- **requestId**: A chave estrangeira para a `Request` associada.
- **responseId**: A chave estrangeira para a `Response` associada.
- **createdAt**: Data e hora de criação do registro.

## Relacionamentos

- **CorePathname**: O `CoreLog` está diretamente ligado a um template de rota, permitindo a agregação.
- **TrafficSource**: Contextualiza a fonte do log.
- **Request** e **Response**: Fornecem os detalhes completos da transação HTTP individual que gerou este log.

## Importância no Sistema

O `CoreLog` serve a um propósito de análise agregada e de longo prazo:

1.  **Análise de Performance de Endpoint**: Ao consultar todos os `CoreLog`s de um `CorePathname` específico, pode-se calcular facilmente o tempo médio de resposta, a taxa de erro e outras métricas de performance para um endpoint específico ao longo do tempo.
2.  **Visão Agregada**: Enquanto `HttpTraffic` é ótimo para inspecionar transações individuais, `CoreLog` é ideal para dashboards e relatórios que mostram a saúde geral de cada rota da API.
3.  **Eficiência de Consulta**: Para análises de alto nível, consultar `CoreLog` pode ser mais eficiente do que processar e agregar milhões de registros de `HttpTraffic` em tempo real.
4.  **Detecção de Tendências**: Ajuda a identificar tendências, como um endpoint que está ficando progressivamente mais lento ou apresentando mais erros ao longo de semanas ou meses.

Em resumo, se `HttpTraffic` é a "fotografia" de uma única árvore, `CoreLog` é a visão da "floresta", permitindo análises poderosas e agregadas sobre o comportamento de cada rota da aplicação.
