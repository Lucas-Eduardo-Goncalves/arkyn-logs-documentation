---
title: Entidade pathname (Caminho de URL)
---

A entidade `Pathname` representa os caminhos específicos (rotas ou páginas) dentro de um `Domain` que estão sendo monitorados. Por exemplo, se o domínio é `meusite.com`, os pathnames poderiam ser `/home`, `/produtos`, ou `/contato`.

## Atributos Principais

- **id**: Identificador único para cada pathname.
- **value**: O caminho da URL (ex: `/users`, `/articles/123`).
- **trafficSourceId**: A chave estrangeira que vincula o pathname a uma `TrafficSource`.
- **domainId**: A chave estrangeira que vincula o pathname a um `Domain`.
- **createdAt**: Data e hora de criação do registro.

## Relacionamentos

- **TrafficSource**: Cada `Pathname` está associado a uma `TrafficSource` para facilitar a agregação de dados no nível da fonte de tráfego.
- **Domain**: Cada `Pathname` pertence a um `Domain` específico.
- **HttpTraffic**: Um `Pathname` pode ter múltiplos registros de `HttpTraffic` associados, representando todas as requisições feitas para aquele caminho específico.

## Importância no Sistema

A entidade `Pathname` é crucial para:

1.  **Análise Detalhada de Rotas**: Permitir que os usuários analisem o desempenho, os erros e o volume de tráfego de rotas específicas da aplicação.
2.  **Identificação de Problemas**: Isolar problemas em endpoints específicos. Por exemplo, identificar que a rota `/api/checkout` está retornando um número alto de erros 500.
3.  **Métricas de Performance**: Calcular métricas como tempo médio de resposta para cada rota da aplicação.
4.  **Agregação de Logs**: Agrupar todos os logs que pertencem a um mesmo endpoint, facilitando a depuração e a análise de comportamento.

Em resumo, `Pathname` fornece a granularidade final para a análise de tráfego web, permitindo que os usuários entendam exatamente como cada parte de sua aplicação está se comportando.
