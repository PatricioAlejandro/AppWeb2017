/**
 * Created by patriciochavez on 6/19/17.
 */
declare var module;
module.exports = {
  bienvenido:function(req,res){
    if (req.method == "PUT"){
      return res.json({saludo:"Hola"});
    }else{
      return res.send("Error en metodo")
    }

  },
  welcome:function(req,res){
    if (req.method == "POST"){
      return res.send("Hola");
    }else{
      return res.badRequest("Error en el metodo")
    }
  }
}
