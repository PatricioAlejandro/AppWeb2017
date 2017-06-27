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
    chars: function (req, res) {
        res.charset = 'utf8';
        return res.send();
    },
    enviar: function (req, res) {
        res.send("Hola, este es un metodo .send");
    },
    son: function (req, res) {
        res.json({ saludo: 'Hola, este es un metodo .json' });
    },
    sonp: function (req, res) {
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
    tipo: function (req, res) {
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
    att: function (req, res) {
        return res.attachment();
    },
    crearUsuarioQuemado: function (req, res) {
        var nuevoUsuario = {
            nombres: "Patricio",
            apellidos: "Chavez",
            password: "123",
            correo: "asdasd@asdf.com",
            fechaNacimiento: new Date()
        };
        Usuario.create(nuevoUsuario).exec(function (err, records) {
            if (err) {
                return res.serverError(err);
            }
            else {
                return res.ok(records);
            }
        });
    }
};
