/**
 * JWTController
 *
 * @description :: Server-side logic for managing JWTS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var jwt = require("jsonwebtoken");
module.exports = {
	Emitir:(req,res)=>{
	  var parametros = req.allParams();
	  if (parametros.id) {
	    var token = jwt.sign({
        exp: 1500000000 ,
        data: {
          id: parametros.id
        }
      }, 'mi mama me mima');

      return res.ok(token);
    }else{
	    return res.badRequest("No envia Id");
    }
  },
  Validar: (req,res)=>{
    var parametros = req.allParams();
    if (parametros.token) {
      var decodificado = jwt.verify(parametros.token, 'mi mama me mima');
      return res.ok(decodificado);
    }else{
      return res.badRequest("No envia token");
    }
  },
  ValidarSecret: (req,res)=>{
    var parametros = req.allParams();
    if (parametros.token) {
      var decodificado = jwt.verify(parametros.token, 'secret');
      return res.ok(decodificado);
    }else{
      return res.badRequest("No envia token");
    }
  }
};

