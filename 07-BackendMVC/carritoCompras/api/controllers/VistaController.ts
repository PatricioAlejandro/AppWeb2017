declare var module;
module.exports = {
  vistaOculta: (req, res) => {
    return res.view('Oculto/sorpresa')
  },
  homepage: (req, res) => {
    Usuario.find().exec((err, records) => {
      if (err){
        return res.serverError(err);
      }else {
        res.view('homepage', {
          usuarios: records;
        })
      }
    })
  },
  CrearUsuario: (req,res)=>{
    return res.view('usuario gestion/crearUsuario')
  }
};

