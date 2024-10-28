// Carga de módulos "clásica" -> COMMONJS
const os = require('os')
// console.log(os);

console.log("Memoria libre", (os.freemem()/1024/1024/1024).toFixed(2), "Gb");
console.log("Memoria total", (os.totalmem()/1024/1024/1024).toFixed(2), "Gb");
console.log("Hay", os.cpus().length, "núcleos");
console.log("Nombre del equipo:", os.hostname());
console.log("Versión del sistema operativo:", os.release());
console.log("Usuario", os.userInfo());

