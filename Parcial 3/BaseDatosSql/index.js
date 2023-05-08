const express  = require('express')
const app = express()
var mysql = require('mysql');

app.use(express.json());

//aqui se cambia usurarios por el nombre de de la tabla 
app.get('/generosmusicales', (req,res)=> {

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'programacionweb'
    });

        connection.connect();
 
        connection.query(`SELECT * FROM GENEROSMUSICALES WHERE id=${req.query.id_generos}`,  function(error, results, fields){

            if (error) throw error;
            res.json(results)
        }); 
 
        connection.end();
})

//enviar datos en el body
//casi siempre son para dar de alta, se puede enviar json,html varias cosas
app.post('/generosmusicales', (req,res)=> {
    console.log(req.body.id);
    res.send('Enviaste una peticion POST a /generosmusicales');
})

app.listen(8082, () => {
    console.log("servidor express escuchando en 8082");
})
