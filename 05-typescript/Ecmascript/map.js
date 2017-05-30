/**
 * Created by patriciochavez on 5/29/17.
 */
var arr = [4, 6, 7, 4, 5, 8, 10, 4, 7];
//devuelve un arreglo
var resultdao = arr.map(function (valor, indice, arreglo) {
    return valor * 0.2;
});
console.log("resultado ", resultdao);
