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

- **HttpTraffic**: Uma `Request` pode estar associada a um registro de `HttpTraffic`, representando a parte de "entrada" de um log de tráfego HTTP completo.
- **CoreLog**: De forma similar, uma `Request` pode estar associada a um `CoreLog`, detalhando a requisição que gerou aquele log principal.

## Importância no Sistema

A entidade `Request` é fundamental para a depuração e análise detalhada do comportamento da aplicação. Ela permite que os desenvolvedores:

1.  **Inspecionem Dados de Entrada**: Verifiquem exatamente quais cabeçalhos, corpo e parâmetros foram enviados em uma requisição específica, o que é crucial para reproduzir bugs.
2.  **Analisem o Uso da API**: Entendam como os clientes estão utilizando a API, quais `headers` estão sendo enviados e quais `payloads` são mais comuns.
3.  **Depurem Erros**: Ao analisar um log de erro (seja um `HttpTraffic` com status 500 ou uma `Exception`), ter acesso ao `Request` original é essencial para entender a causa raiz do problema.
4.  **Auditoria e Segurança**: Registrem os dados de entrada para fins de auditoria ou para identificar padrões de requisições maliciosas.

Em resumo, a entidade `Request` fornece uma "fotografia" completa dos dados que entram no sistema a cada requisição HTTP, sendo um recurso indispensável para o monitoramento e a manutenção de qualquer aplicação web.
