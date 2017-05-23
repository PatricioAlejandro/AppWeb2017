/**
 * Created by patriciochavez on 5/22/17.
 */
var arreglosStrings = ["1","2"];
arreglosStrings.push("3"); //["1","2","3"];
arreglosStrings.pop(); //["1","2"];
arreglosStrings.splice(1,0,"3"); //["1","3","2"];
arreglosStrings.splice(0,1); //["3","2"];