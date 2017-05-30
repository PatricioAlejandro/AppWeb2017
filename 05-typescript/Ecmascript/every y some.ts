/**
 * Created by patriciochavez on 5/29/17.
 */
let arr = [4,6,7,4,2,8,10,2,7];
//devuelve un arreglo
let resultdao = arr.map((valor,indice,arreglo)=>{
    return valor*0.2;
}).some(v=>{
    return v<= 0.2
});
console.log("resultado ",resultdao)




//AND --- todos cumplen verdadero
let resultado2 = arr.every((v,i,a)=>{
    return (v>=7);
});
console.log(resultado2);


//OR --- al menos alguno es true entonces true
let resultado3 = arr.some((v,i,a)=>{
    return (v<2);
});
console.log(resultado3);