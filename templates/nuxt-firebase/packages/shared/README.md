# Shared

Compartilha funções que são usadas pelo `server` e pelo `webapp`.

O projeto `functions` não utiliza porque seria preciso configurar uso de pacotes privados nele.

No caso so `webapp` e `server` o `nitro.js` fica responsável por compilar tudo e não ser necessário ter `node_modules` pra subir. O `functions` não tem `nitro.js`