---
title: Entidade Traffic Source (Fonte de Tráfego)
---

A entidade `TrafficSource` (Fonte de Tráfego) representa a origem dos logs e eventos monitorados pelo Arkyn Logs. Cada `TrafficSource` está associada a um `User` e funciona como um contêiner para agrupar dados de uma aplicação, serviço ou sistema específico.

## Atributos Principais

- **id**: Identificador único para cada fonte de tráfego.
- **name**: Nome descritivo para a fonte de tráfego (ex: "API de Produção", "Website Institucional").
- **trafficDomain**: O domínio principal associado a esta fonte de tráfego.
- **userId**: A chave estrangeira que vincula a fonte de tráfego a um `User`.
- **createdAt**: Data e hora de criação do registro.
- **updatedAt**: Data e hora da última atualização do registro.

## Relacionamentos

A `TrafficSource` é uma entidade central que se conecta a várias outras partes do sistema:

- **User**: Cada fonte de tráfego pertence a um único usuário.
- **Domain**: Uma `TrafficSource` pode ter vários `Domain` (domínios) associados.
- **Pathname**: Agrupa todos os `Pathname` (caminhos de URL) registrados sob esta fonte.
- **HttpTraffic**: Armazena os registros de tráfego HTTP (`HttpTraffic`) gerados.
- **CorePathname**: Mantém os caminhos de URL principais (`CorePathname`) para agregação de logs.
- **Exception**: Registra todas as exceções (`Exception`) capturadas.
- **CoreLog**: Consolida os logs principais (`CoreLog`).

## Importância no Sistema

A `TrafficSource` é fundamental para a organização e o isolamento dos dados no Arkyn Logs. Ela permite que os usuários:

1.  **Segmentem a Análise**: Filtrem e analisem logs e métricas de diferentes sistemas de forma independente.
2.  **Gerenciem o Acesso**: Embora o acesso seja controlado no nível do usuário, a fonte de tráfego ajuda a contextualizar de onde os dados estão vindo.
3.  **Estruturação Lógica**: Fornece uma maneira lógica de agrupar todos os artefatos de monitoramento (domínios, logs, exceções) que pertencem a uma mesma aplicação.

Em resumo, a `TrafficSource` atua como um "projeto" ou "workspace" dentro do Arkyn Logs, garantindo que os dados de diferentes fontes sejam mantidos organizados e separados.
