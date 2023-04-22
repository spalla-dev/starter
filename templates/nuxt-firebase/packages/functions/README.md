# Functions

Aqui devem estar reunidas as Cloud Functions que interagem com Firebase sem ser via HTTP Request.

Por exemplo, triggers de criação de documentos, contas ou funções agendadas.

## Dependências

Esse projeto não pode ter pacotes privados.

Diferente do `webapp` e `server` onde o `nitro.js` fica responsável por compilar tudo e não ser necessário ter `node_modules` pra subir. O `functions` não tem `nitro.js` para isso, portando, no deploy é feito um `npm install` das dependências, e se tiver pacote privado não vai funcionar.

O NitroJS por enquanto só suporta Cloud Functions HTTP.