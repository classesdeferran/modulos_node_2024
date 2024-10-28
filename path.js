
// D:\NODE_OCT_2024_b\modulos_de_node

// home/NODE_OCT_2024_b/modulos_de_node

const path = require('node:path')
// const path = require('path') 

console.log(path.sep);

// join() -> crear rutas por unión de elementos
const rutaCSS = path.join("proyecto1", "public", "static", "style.css")
console.log(rutaCSS);

console.log(path.basename(rutaCSS)); // nombre del fichero
console.log(path.dirname(rutaCSS)); // toda la ruta excepto el fichero
console.log(path.parse(rutaCSS)); 
path.basename(rutaCSS) = "miEstilo.css"
console.log(path.basename(rutaCSS)); 
