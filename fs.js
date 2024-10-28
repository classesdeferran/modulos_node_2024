const fs = require('node:fs')

// console.log(fs);

texto = "En un lugar de la Mancha de cuyo nombre no quiero acordarme..."

// fs.writeFileSync("mi_texto.txt", texto)

// fs.appendFileSync("mi_texto.txt", "\nYa me acuerdo")


// let contenido = fs.readFileSync("mi_texto.txt", "utf8")
// console.log(contenido);

console.log("1_Antes de escribir");
fs.writeFile("mi_texto_2.txt", texto, (err) => {
    if (err) throw(err);
    // console.log("Texto correcto");
 
    console.log("2_Hemos terminado la escritura");

} ) 
console.log("3_Después de escribir");

fs.appendFile("mi_texto_2.txt", "\nYa me acuerdo", (err) => {
    if (err) throw(err);
    // console.log("Texto correcto");
 
    console.log("4_Hemos terminado el append");

} )
console.log("5_Después del append");

fs.unlink("mi_texto_2.txt", (err) => {
    if (err) throw(err);
 
    console.log("6_Hemos terminado el borrado");
})





