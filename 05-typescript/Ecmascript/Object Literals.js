/**
 * Created by patriciochavez on 5/29/17.
 */
function multiplicarX2(n1, n2) {
    var resultado = {
        n1: n1,
        n2: n2
    };
    resultado.n1 = resultado.n1 * 2;
    resultado.n2 = resultado.n2 * 2;
    return resultado;
}
var arregloNumeros = [1, 2, 3, 4, 5];
var resultado = arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log("El valor es: " + valor);
    console.log("El indice es: " + indice);
    console.log("El arreglo es: " + arreglo);
});
console.log("Resultado es ", resultado);
