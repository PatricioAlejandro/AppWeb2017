/**
 * Created by patriciochavez on 5/29/17.
 */
function holaMundo(){
    console.log("Hola Mundo");
}

let holaMundo2 = function () {
    console.log("Hola Mundo");
}

let holaMundo3 =  () => {
    console.log("Hola Mundo");
}
let holaMundo4 =  () => console.log("Hola Mundo");

let holaMundo5 = function () {
    return 5;
}

let holaMundo6 = () => 5;
let hola = nombre => "Hola "+ nombre;

let saludarApellido = (nombre,apellido) => `Hola ${nombre} ${apellido}`;
console.log(saludarApellido("Pato","Chavez"));