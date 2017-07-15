/**
 * Created by patriciochavez on 6/19/17.
 */
declare var module;
declare var sails;
declare var Usuario;

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
  charsetTest: function(req,res){
    res.charset = 'utf8';
    return res.send();
  }
  sendTest: function(req,res){
    res.send("Hola, este es un metodo .send")
  }
  jsonTest: function(req,res){
    res.json({saludo:'Hola, este es un metodo .json'});
  }
  jsonpTest: function(req,res){
    return res.jsonp({
      users: [{
        name: 'Patricio',
        id: 1
      }, {
        name: 'Juan',
        id: 2
      }]
    });
  }
  typeTest: function(req,res) {
    return res.type('json');
  }
  formato: function (req,res) {
    res.format({
      text: function(){
        res.send('not called');
      },
      html: function(){
        res.send('<html><body>Got This one, but not desired</body></html>')
      },
      json: function(){
        res.json({ expected: 'THIS ONE' ,but:'Not called'})
      }
    });
  }
  attTest: function (req,res) {
    return res.attachment();
  },

  crearUsuarioQuemado: (req,res)=>{
    let parametros = req.allParams();
    //sails.log("Parametros",parametros);
    let nuevoUsuario = {
      nombres: parametros.nombres,
      apellidos: parametros.apellidos,
      password: parametros.password,
      correo: parametros.correo,
      fechaNacimiento: parametros.fechaNacimiento
    };
    //1-> Query parameters
    //2-> Forms parameters
    Usuario.create(nuevoUsuario).exec((err,records)=>{
      if(err){
        return res.serverError(err);
      }else{
        res.redirect('/');
      }
    })
  },
  encontrarUsuario: (req,res)=>{
    let parametros = req.allParams();
    let User = {
      nombres: parametros.nombres
    };
    //1-> Query parameters
    //2-> Forms parameters
    Usuario.find(User).exec((err,records)=>{
      if(err){
        return res.serverError(err);
      }else{
        return res.ok(records);
      }
    })
  },
  encontrarCrear: (req,res)=>{
    let parametros = req.allParams();
    let User = {
      nombres: parametros.nombres
    };
    //1-> Query parameters
    //2-> Forms parameters
    Usuario.findOrCreate(User).exec((err,records)=>{
      if(err){
        return res.serverError(err);
      }else{
        return res.ok(records);
      }
    })
  },
  contar: (req,res)=>{
    let parametros = req.allParams();
    let User = {
      nombres: parametros.nombres
    };
    //1-> Query parameters
    //2-> Forms parameters
    Usuario.count(User).exec((err,records)=>{
      if(err){
        return res.serverError(err);
      }else{
        return res.ok(records);
      }
    })
  },
  eliminar: (req,res)=>{
    let parametros = req.allParams();
    let User = {
      nombres: parametros.nombres
    };
    //1-> Query parameters
    //2-> Forms parameters
    Usuario.destroy(User).exec((err,records)=>{
      if(err){
        return res.serverError(err);
      }else{
        return res.ok(records);
      }
    })
  }
}
