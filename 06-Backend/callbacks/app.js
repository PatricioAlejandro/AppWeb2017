const fs = require('fs');
const express = require('express');
const calc = require('twj-a-chavez');
let a = 2,b=3,resultado;
resultado = calc.calculadoraUdla.sumar(a,b);
console.log(`Resultado es: ${resultado}`);
console.log("Empieza");
//1 ruta y ombre del archivo
//2 codificacion
//3 anonymus function(error!,contenido del archivo)
fs.readFile('texto.txt', 'utf8',
    (err, data) => {
        if (err) throw err;
        console.log(data);
    });

console.log("Termina");