// HTTP
const http = require("node:http");

// Obtener los datos del fichero .env
process.loadEnvFile();
console.log(process.env.PUERTO);
console.log("Contraseña:", process.env.PASSWORD);
const PUERTO = process.env.PUERTO;

// console.log(http);

const estilo = `
<style>
h1 { color: red}
</style>
`;

const server = http.createServer((req, res) => {
  console.log(res.statusCode);

  if (req.url === "/") {
    if (res.statusCode === 200) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`${estilo} <h1>Todo OK, estamos en la raiz del proyecto</h1>`);
      res.write("<a href='/error'>Ir a ERROR</a>")
      res.end();
      return
    } else if (res.statusCode === 404) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(`${estilo} <h1>Error, recurso no encontrado</h1>`);
      res.end();
      return
    }
  }
  if (req.url === "/error") {
    if (res.statusCode === 200) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`${estilo} <h1>Todo OK, estamos en error</h1>`);
      res.end();
      return
    } else if (res.statusCode === 404) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(`${estilo} <h1>Error, recurso no encontrado</h1>`);
      res.end();
    }
  }

  res.writeHead(404, { "Content-Type": "text/html" });
      res.write(`${estilo} <h1>Error, recurso no encontrado</h1>`);
      res.end();

});

server.listen(PUERTO, () => {
  console.log(`Servidor iniciado en 'http://localhost:${PUERTO}'`);
});
