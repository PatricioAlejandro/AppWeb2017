/**
 * Created by patriciochavez on 5/29/17.
 */
var arr = [4, 6, 7, 4, 2, 8, 10, 2, 7];
//devuelve un arreglo
var resultdao = arr.map(function (valor, indice, arreglo) {
    return valor * 0.2;
}).some(function (v) {
    return v <= 0.2;
});
console.log("resultado ", resultdao);
//AND --- todos cumplen verdadero
var resultado2 = arr.every(function (v, i, a) {
    return (v >= 7);
});
console.log(resultado2);
//OR --- al menos alguno es true entonces true
var resultado3 = arr.some(function (v, i, a) {
    return (v < 2);
});
console.log(resultado3);
