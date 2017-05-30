/**
 * Created by patriciochavez on 5/29/17.
 */
let arr = [4,6,7,4,5,8,10,4,7];
//devuelve un arreglo
let resultdao = arr.map((valor,indice,arreglo)=>{
    return valor*0.2;
});
console.log("resultado ",resultdao)