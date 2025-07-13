---
title: Entidade Response (Resposta)
---

A entidade `Response` armazena os detalhes da resposta HTTP correspondente a uma `Request`. Assim como a `Request`, cada registro de `Response` está diretamente ligado a um `HttpTraffic` ou `CoreLog`, completando o ciclo da transação HTTP.

## Atributos Principais

- **id**: Identificador único para cada registro de resposta.
- **headers**: Um objeto JSON contendo os cabeçalhos da resposta HTTP (ex: `Content-Type`, `Content-Length`).
- **body**: Um objeto JSON contendo o corpo (payload) da resposta, se houver.
- **createdAt**: Data e hora em que a resposta foi registrada.

## Relacionamentos

- [**HttpTraffic**](/ptbr/httptraffic/introduction): Uma `Response` está associada a um registro de `HttpTraffic`, representando a parte de "saída" de um log de tráfego HTTP.
- [**CoreLog**](/ptbr/corelog/introduction): Da mesma forma, uma `Response` pode estar associada a um `CoreLog`, detalhando a resposta que foi enviada para a requisição que gerou o log.

Juntas, as entidades `Request` e `Response` fornecem uma visão de 360 graus de cada transação HTTP, tornando o Arkyn Logs uma ferramenta poderosa para o monitoramento e a manutenção de aplicações.
