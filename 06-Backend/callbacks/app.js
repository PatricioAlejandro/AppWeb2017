const fs = require('fs');
const express = require('express');
const calc = require('twj-a-chavez');
const Passwords = require('machinepack-passwords');
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

// Encrypt a string using the BCrypt algorithm.
Passwords.encryptPassword({
    password: 'pat0',
}).exec({
// An unexpected error occurred.
    error: (err) => {
        console.log(`Error: ${err}`);
    },
// OK.
    success: (result) => {
        console.log(`Resultado: ${result}`);
    },
});






console.log("Termina");