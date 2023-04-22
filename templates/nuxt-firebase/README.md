# Nuxt Firebase

Esse template contempla a criação de um projeto contendo:

## Functions 
- Triggers de Firestore/Realtime para Cloud Functions (projeto `functions`)

## Layers

### Server

- Criação de rotas HTTP do Cloud Functions (projeto `server` usando NitroJS)

### Lib Componentes

- Componentes centralizados para estilização e fácil manutenção e mudança de Design System

## Webapp

Aplicação base que faz _extends_ de `server` e `lib-components`

## Shared

Funções e outros _types_ compartilhados entre `lib-components`, `server` e `webapp`.

