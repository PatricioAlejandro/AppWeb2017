/**
 * Created by patriciochavez on 5/29/17.
 */

//ECMASCRIPT
let a = 1;
let html = "<h1>HOLA</h1>h1>" +
            "<p>Hola Amigos</p>"+
            "<img src='algunURL' alt=''>"+
            "<a href='google'>IR A google</a>"

let nombreUsuario = "Patricio Chavez";
let htmlConTemplateStrings = `
<h1>htmlsadfasfd</h1>h1>
<p>${nombreUsuario}</p>
<ul></ul>
`;

console.log(htmlConTemplateStrings);
