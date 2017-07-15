module.exports = {
    bienvenido: function (req, res) {
        if (req.method == "PUT") {
            return res.json({ saludo: "Hola" });
        }
        else {
            return res.send("Error en metodo");
        }
    },
    welcome: function (req, res) {
        if (req.method == "POST") {
            return res.send("Hola");
        }
        else {
            return res.badRequest("Error en el metodo");
        }
    },
    charsetTest: function (req, res) {
        res.charset = 'utf8';
        return res.send();
    },
    sendTest: function (req, res) {
        res.send("Hola, este es un metodo .send");
    },
    jsonTest: function (req, res) {
        res.json({ saludo: 'Hola, este es un metodo .json' });
    },
    jsonpTest: function (req, res) {
        return res.jsonp({
            users: [{
                    name: 'Patricio',
                    id: 1
                }, {
                    name: 'Juan',
                    id: 2
                }]
        });
    },
    typeTest: function (req, res) {
        return res.type('json');
    },
    formato: function (req, res) {
        res.format({
            text: function () {
                res.send('not called');
            },
            html: function () {
                res.send('<html><body>Got This one, but not desired</body></html>');
            },
            json: function () {
                res.json({ expected: 'THIS ONE', but: 'Not called' });
            }
        });
    },
    attTest: function (req, res) {
        return res.attachment();
    },
    crearUsuarioQuemado: function (req, res) {
        var parametros = req.allParams();
        //sails.log("Parametros",parametros);
        var nuevoUsuario = {
            nombres: parametros.nombres,
            apellidos: parametros.apellidos,
            password: parametros.password,
            correo: parametros.correo,
            fechaNacimiento: parametros.fechaNacimiento
        };
        //1-> Query parameters
        //2-> Forms parameters
        Usuario.create(nuevoUsuario).exec(function (err, records) {
            if (err) {
                return res.serverError(err);
            }
            else {
                res.redirect('/');
            }
        });
    },
    encontrarUsuario: function (req, res) {
        var parametros = req.allParams();
        var User = {
            nombres: parametros.nombres
        };
        //1-> Query parameters
        //2-> Forms parameters
        Usuario.find(User).exec(function (err, records) {
            if (err) {
                return res.serverError(err);
            }
            else {
                return res.ok(records);
            }
        });
    },
    encontrarCrear: function (req, res) {
        var parametros = req.allParams();
        var User = {
            nombres: parametros.nombres
        };
        //1-> Query parameters
        //2-> Forms parameters
        Usuario.findOrCreate(User).exec(function (err, records) {
            if (err) {
                return res.serverError(err);
            }
            else {
                return res.ok(records);
            }
        });
    },
    contar: function (req, res) {
        var parametros = req.allParams();
        var User = {
            nombres: parametros.nombres
        };
        //1-> Query parameters
        //2-> Forms parameters
        Usuario.count(User).exec(function (err, records) {
            if (err) {
                return res.serverError(err);
            }
            else {
                return res.ok(records);
            }
        });
    },
    eliminar: function (req, res) {
        var parametros = req.allParams();
        var User = {
            nombres: parametros.nombres
        };
        //1-> Query parameters
        //2-> Forms parameters
        Usuario.destroy(User).exec(function (err, records) {
            if (err) {
                return res.serverError(err);
            }
            else {
                return res.ok(records);
            }
        });
    }
};
