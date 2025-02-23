// Cargar el módulo con que crea el servidor
const http = require("node:http");
const PORT = 4000

// Crear el servidor
const server = http.createServer((request, response) => {
  // request -> req, response -> res

  // Variables para incluir el texto correspondiente
  let body = "";
  let title = "";

  // Según la ruta introduciremos el contenido
  if (request.url === "/") {
    title = "Página inicial";
    body = "<h1>Página inicial</h1>";
    body += "<a href='/node'>Ir a NODE</a>";
  } else if (request.url === "/node") {
    title = "Página NODE";
    body = "<h1>Página NODE</h1>";
    body += "<a href='/'>Ir a INICIO</a>";
  } else {
    title = "ERROR 404";
    body = "<h1>Página no encontrada</h1>";
    body += "<a href='/'>Ir a INICIO</a>";
  }

  // Construir el HTML
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        ${body}
    </body>
    </html>
    `;

    // Enviar el código HTML al servidor
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(html)
    response.end()
});

server.listen(PORT, () => console.log(`Conexion en http://localhost:${PORT}`))
