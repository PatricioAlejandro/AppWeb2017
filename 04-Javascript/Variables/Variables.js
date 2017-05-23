var texto = "";
var texto2 = '';
var num = 1;
var bool = true;
var dec = 11.2;
var fecha = new Date();
var obj = {};
texto = 2;
texto = obj;
//sdgdgfgssdfgdsfgfgsdgfsdfg
/*dfsgsdgsdfg
 sdfgsdfgsfdg*/
var arreglo = ["a",2.6,"c",[false,"string"],1,true];

var json = {
    nombre: "pato",
    apellido: "chvz",
    fechaNacimiento: new Date(),
    mayorEdad: true,
    peso: 70.3,
    altura: 159,
    imprimirNombreCompleto: function () {
        return this.nombre + "  " + this.apellido;
    }
};
json.altura //159
json.apellido //chvz
json.imprimirNombreCompleto();
json.titulo = "Ingeniero";
//json.titulo.fechaExpedicion = // esto esta maaaaaal
delete json.titulo;

