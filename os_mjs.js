// Carga de módulos "clásica" -> COMMONJS
// Carga de módulos "moderna" -> MJS
import { freemem, totalmem, cpus, hostname, release, userInfo } from 'os';
// console.log(os);

console.log("Memoria libre", (freemem()/1024/1024/1024).toFixed(2), "Gb");
console.log("Memoria total", (totalmem()/1024/1024/1024).toFixed(2), "Gb");
console.log("Hay", cpus().length, "núcleos");
console.log("Nombre del equipo:", hostname());
console.log("Versión del sistema operativo:", release());
console.log("Usuario", userInfo());

