---
title: Entidade CorePathname (Caminho de URL Principal)
---

A entidade `CorePathname` representa uma versão "normalizada" ou "agregada" de um `Pathname`. Enquanto `Pathname` pode conter valores dinâmicos (ex: `/users/123`, `/users/456`), `CorePathname` representa o template da rota (ex: `/users/:id`). Isso permite agrupar logs e exceções que pertencem à mesma rota lógica, independentemente dos parâmetros específicos.

## Atributos Principais

- **id**: Identificador único para o caminho principal.
- **value**: O template da rota (ex: `/products/:productId/reviews`).
- **trafficSourceId**: A chave estrangeira que vincula o `CorePathname` a uma `TrafficSource`.
- **createdAt**: Data e hora de criação do registro.

## Relacionamentos

- **TrafficSource**: Cada `CorePathname` pertence a uma `TrafficSource`.
- **CoreLog**: Vários `CoreLog`s podem ser associados a um `CorePathname`, permitindo a agregação de logs por rota.
- **Exception**: As exceções (`Exception`) também são vinculadas a um `CorePathname`, permitindo agrupar todos os erros de um mesmo tipo de rota.

## Importância no Sistema

A normalização de rotas através do `CorePathname` é uma técnica poderosa para a análise de logs e erros:

1.  **Agregação Inteligente**: Permite que o sistema agrupe todos os logs da rota `/users/:id` em uma única visualização, em vez de tratá-los como centenas de rotas diferentes. Isso é essencial para calcular estatísticas significativas, como a taxa de erro ou o tempo médio de resposta de um endpoint.
2.  **Análise de Erros por Rota**: Facilita a identificação de quais rotas lógicas estão causando mais exceções, ajudando a priorizar correções.
3.  **Visão de Alto Nível**: Fornece uma visão mais limpa e de alto nível da performance e saúde da aplicação, focando nos "templates" de rota em vez de em cada requisição individual.
4.  **Redução de Ruído**: Evita a poluição do sistema com um número excessivo de `Pathname`s únicos que, na prática, representam o mesmo endpoint.

Em resumo, `CorePathname` é a chave para transformar uma lista de logs individuais em insights acionáveis sobre a performance e a estabilidade de cada endpoint da sua aplicação.
