const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.get('/generosmusicales', (req, res) => {
    if (typeof(req.query.id) === 'undefined') {
        res.json({ mensaje: "Debe enviar el ID del género" });
    } else {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'programacionweb'
        });

        connection.connect();

        connection.query(`SELECT * FROM GENEROSMUSICALES WHERE id=${req.query.id}`, function (error, results, fields) {
            if (error) {
                res.json(error);
            } else {
                if (results.length === 0) {
                    res.json({ Mensaje: "Género no encontrado" });
                } else {
                    res.json(results);
                }
            }
        });

        connection.end();
    }
});

app.post('/generosmusicales', (req, res) => {
    console.log(req.body.id);
    res.send('Enviaste una petición POST a /generosmusicales');
});

app.listen(8082, () => {
    console.log("Servidor express escuchando en el puerto 8082");
});
