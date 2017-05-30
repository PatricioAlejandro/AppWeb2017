/**
 * Created by patriciochavez on 5/29/17.
 */
function holaMundo() {
    console.log("Hola Mundo");
}
var holaMundo2 = function () {
    console.log("Hola Mundo");
};
var holaMundo3 = function () {
    console.log("Hola Mundo");
};
var holaMundo4 = function () { return console.log("Hola Mundo"); };
var holaMundo5 = function () {
    return 5;
};
var holaMundo6 = function () { return 5; };
var hola = function (nombre) { return "Hola " + nombre; };
var saludarApellido = function (nombre, apellido) { return "Hola " + nombre + " " + apellido; };
console.log(saludarApellido("Pato", "Chavez"));
