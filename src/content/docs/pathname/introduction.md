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

- [**TrafficSource**](/trafficsource/introduction): Cada `Pathname` está associado a uma `TrafficSource` para facilitar a agregação de dados no nível da fonte de tráfego.
- [**Domain**](/domain/introduction): Cada `Pathname` pertence a um `Domain` específico.
- [**HttpTraffic**](/httptraffic/introduction): Um `Pathname` pode ter múltiplos registros de `HttpTraffic` associados, representando todas as requisições feitas para aquele caminho específico.

Em resumo, `Pathname` fornece a granularidade final para a análise de tráfego web, permitindo que os usuários entendam exatamente como cada parte de sua aplicação está se comportando.
