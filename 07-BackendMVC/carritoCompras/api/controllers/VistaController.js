module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    homepage: function (req, res) {
        Usuario.find().exec(function (err, records) {
            if (err) {
                return res.serverError(err);
            }
            else {
                res.view('homepage', {
                    usuarios: records
                });
            }
        });
    },
    CrearUsuario: function (req, res) {
        return res.view('usuario gestion/crearUsuario');
    }
};
