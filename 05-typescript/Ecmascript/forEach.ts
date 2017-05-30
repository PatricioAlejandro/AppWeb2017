/**
 * Created by patriciochavez on 5/29/17.
 */
let arregloNumeros = [1,2,3,4,5];
let resultado = arregloNumeros.forEach((valor,indice,arreglo)=>{
    console.log("El valor es: " + valor);
    console.log("El indice es: " + indice);
    console.log("El arreglo es: " + arreglo);
});
console.log("Resultado es ",resultado);