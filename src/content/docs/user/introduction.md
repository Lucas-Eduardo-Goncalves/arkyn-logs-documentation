---
title: Entidade Usuário (User)
---

A entidade `User` (Usuário) é um dos pilares centrais do sistema Arkyn Logs. Ela representa os indivíduos que têm acesso e interagem com a plataforma. A gestão de usuários é fundamental para a segurança e a personalização da experiência de monitoramento de logs.

## Atributos Principais

- **id**: Identificador único para cada usuário.
- **name**: Nome do usuário.
- **email**: Endereço de e-mail do usuário, utilizado para login e comunicação.
- **password**: Senha criptografada para autenticação.
- **utc**: Fuso horário do usuário, para que os logs e datas sejam exibidos corretamente.
- **createdAt**: Data e hora de criação do registro do usuário.
- **updatedAt**: Data e hora da última atualização do registro do usuário.

## Relacionamentos

- [**TrafficSource**](/trafficsource/introduction): Um usuário pode possuir várias `TrafficSource` (fontes de tráfego), o que permite agrupar e filtrar logs originados de diferentes aplicações ou serviços monitorados por aquele usuário.

Em resumo, a entidade `User` não apenas gerencia o acesso, mas também serve como um ponto de agregação para todos os dados de log coletados, tornando-se a base para a organização e a segurança da plataforma Arkyn Logs.
