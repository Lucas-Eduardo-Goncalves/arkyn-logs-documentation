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

- **HttpTraffic**: Uma `Response` está associada a um registro de `HttpTraffic`, representando a parte de "saída" de um log de tráfego HTTP.
- **CoreLog**: Da mesma forma, uma `Response` pode estar associada a um `CoreLog`, detalhando a resposta que foi enviada para a requisição que gerou o log.

## Importância no Sistema

A entidade `Response` é tão crucial quanto a `Request` para a análise e depuração, permitindo que os desenvolvedores:

1.  **Verifiquem a Saída da API**: Inspecionem os cabeçalhos e o corpo exatos que a aplicação retornou, o que é vital para confirmar se a API está se comportando como esperado.
2.  **Depurem Erros do Lado do Servidor**: Ao analisar um log de erro, a `Response` pode conter mensagens de erro detalhadas ou um stack trace no corpo, que são fundamentais para identificar a causa do problema.
3.  **Analisem a Performance**: O tamanho do corpo da resposta (`body`) e os cabeçalhos de `Content-Length` podem ser usados para analisar a performance e o consumo de banda.
4.  **Validem Contratos de API**: Garantam que a resposta da API está em conformidade com a especificação ou o contrato definido (ex: OpenAPI/Swagger).

Juntas, as entidades `Request` e `Response` fornecem uma visão de 360 graus de cada transação HTTP, tornando o Arkyn Logs uma ferramenta poderosa para o monitoramento e a manutenção de aplicações.
