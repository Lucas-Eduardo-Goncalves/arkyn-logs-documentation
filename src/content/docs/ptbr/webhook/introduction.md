---
title: Entidade Webhook
---

A entidade `Webhook` representa as configurações de notificação automática do sistema Arkyn Logs. Cada `Webhook` está associada a uma `TrafficSource` e permite enviar notificações para plataformas externas quando eventos específicos ocorrem.

## Atributos principais

- **id**: Identificador único para cada webhook.
- **discordChannelId**: ID do canal do Discord para onde as notificações serão enviadas (pode ser nulo).
- **trafficSourceId**: Chave estrangeira que vincula o webhook a uma `TrafficSource`.
- **createdAt**: Data e hora de criação do registro.
- **updatedAt**: Data e hora da última atualização do registro.

## Relacionamentos

O `Webhook` se conecta diretamente com:

- [**TrafficSource**](/ptbr/trafficsource/introduction): Cada webhook pertence a uma única fonte de tráfego, permitindo notificações específicas para cada projeto ou aplicação monitorada.

## Funcionalidades

Atualmente, o sistema suporta notificações para:

- **Discord**: Envio de mensagens automáticas para canais específicos do Discord através do ID do canal configurado.

## Configuração automática

Por padrão, um webhook é criado juntamente com uma fonte de tráfego. Esta configuração pode ser posteriormente atualizada através das funcionalidades de atualização do webhook.

## Resumo

Em resumo, o `Webhook` atua como um mecanismo de notificação que permite aos usuários receber alertas automáticos sobre eventos importantes em suas aplicações monitoradas pelo Arkyn Logs.
