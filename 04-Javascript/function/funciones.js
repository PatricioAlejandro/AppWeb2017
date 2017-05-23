/**
 * Created by patriciochavez on 5/22/17.
 */
function ImprimirHolaMundo() {
    console.log("Hola Mundo")
}
ImprimirHolaMundo();

function Imprimir(texto) {
    console.log(texto)
}
Imprimir("pato");

function Suma2Numeros(a,b) {
    return a+b;
}
Suma2Numeros(2.3,4);

function OperarNumeros(a,b,func) {
    a = a+1;
    b = b+2;
    func(a,b);
}

OperarNumeros(2,4,function (primer,segundo) {
     return primer*segundo;
});



//FOR EACH


