---
title: Entidade Request (Requisição)
---

A entidade `Request` armazena os detalhes de uma requisição HTTP individual que foi capturada pelo sistema de monitoramento. Cada registro de `Request` está diretamente associado a um `HttpTraffic` ou `CoreLog`, fornecendo um detalhamento completo dos dados de entrada de uma transação.

## Atributos Principais

- **id**: Identificador único para cada registro de requisição.
- **headers**: Um objeto JSON contendo os cabeçalhos da requisição HTTP (ex: `Content-Type`, `Authorization`, `User-Agent`).
- **body**: Um objeto JSON contendo o corpo (payload) da requisição, se houver.
- **queryParams**: Um objeto JSON contendo os parâmetros de consulta (query string) da URL.
- **createdAt**: Data e hora em que a requisição foi registrada.

## Relacionamentos

- [**HttpTraffic**](/ptbr/httptraffic/introduction): Uma `Request` pode estar associada a um registro de `HttpTraffic`, representando a parte de "entrada" de um log de tráfego HTTP completo.
- [**CoreLog**](/ptbr/corelog/introduction): De forma similar, uma `Request` pode estar associada a um `CoreLog`, detalhando a requisição que gerou aquele log principal.

Em resumo, a entidade `Request` fornece uma "fotografia" completa dos dados que entram no sistema a cada requisição HTTP, sendo um recurso indispensável para o monitoramento e a manutenção de qualquer aplicação web.
