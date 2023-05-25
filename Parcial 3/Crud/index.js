const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

        //Mostrar Toda la tabla
app.get('/generosmusicales', (req, res) => {
  
        const connection = mysql.createConnection({
              host: 'localhost',
              user: 'root',
              password: '',
              database: 'programacionweb'
        });
  
          connection.connect();
                
          connection.query(`SELECT * FROM GENEROSMUSICALES `, function (error, results, fields) {
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
      
  });

        //Mostrar el genero musical ingresando el ID
app.get('/generosmusicales/:id', (req, res) => {
    
  //podria ser req.params.id    tambien con .body.id    query.id
    if (typeof(req.params.id) === 'undefined') {
        res.json({ estado:0,
        resultado: "Debe enviar el ID del género" });
    } else {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'programacionweb'
        });

        connection.connect();
                                                       //podria ser req.params.id   tambine con req.body.id    
        connection.query(`SELECT * FROM GENEROSMUSICALES WHERE id=${req.params.id}`, function (error, results, fields) {
            if (error) {
                res.json({estado:0, resultado:error.sqlMessage});
            } else {
                if (results.length === 0) {
                    res.json({estado:0, resultado: "Género no encontrado" });
                } else {
                    res.json({estado:1, resultado:results[0]});
                }
            }
        });

        connection.end();
    }
});

        //Borrar de la tabla un genero musical por el ID
app.delete('/generosmusicales/:id', (req, res) => {
    
    
      if (typeof(req.params.id) === 'undefined') {
          res.json({ estado:0,
          resultado: "Debe enviar el ID del género" });
      } else {
          const connection = mysql.createConnection({
              host: 'localhost',
              user: 'root',
              password: '',
              database: 'programacionweb'
          });
  
          connection.connect();
                                                           
          connection.query(`DELETE FROM GENEROSMUSICALES WHERE id=${req.params.id}`, function (error, results, fields) {
              if (error) {
                  res.json({estado:0, resultado:error.sqlMessage});
              } else {
                
                if(results.affectedRows == 1){
                    res.json({estado:1, resultado: "Género musical elimnado de la Base de Datos." });
                }
                else{
                    res.json({estado:0, resultado: "No se pudo eliminar" });
                }
              }
          });
  
          connection.end();
      }
  });

        //Agregar a la tabla un nuevo genero musical  
  app.post('/generosmusicales', (req, res) => {
  
    const connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'programacionweb'
    });

       let sentenciaSQL="insert into generosmusicales values("+req.body.id+","+
                                                            "'"+req.body.nombre+"',"+
                                                            "'"+req.body.descripcion+"',"+
                                                            "'"+req.body.popularidad+"',"+
                                                            "'"+req.body.fecha_creacion+"',"+
                                                            "'"+req.body.ultima_modificacion+"'"+")";
                                                        
    
    console.log(sentenciaSQL);
    //res.json(req.body) 
    connection.connect();
       connection.query(sentenciaSQL, function (error, results, fields) {
           if (error) {
               res.json(error);
           } else {
               console.log(results);
               res.json(results);
           }
       });

       connection.end();
  
});

app.put('/generosmusicales/:id', (req, res) => {
  
       let sentenciaSQL="update generosmusicales set "+
       "nombre='"+req.body.nombre+"',"+
       "descripcion='"+req.body.descripcion+"',"+
       "popularidad='"+req.body.popularidad+"',"+
       "fecha_creacion='"+req.body.fecha_creacion+"',"+
       "ultima_modificacion='"+req.body.ultima_modificacion+"'"
       +" where id="+ req.params.id;
                                    
       const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'programacionweb'
  });
    
    //console.log(sentenciaSQL);
    //res.json(req.body) 
    connection.connect();
       connection.query(sentenciaSQL, function (error, results, fields) {
           if (error) {
               res.json(error);
           } else {
               console.log(results);
               if(results.affectedRows==1){
                res.json({estado:1,
                resultado:"Genero Modificado"});
               } else{
                res.json({estado:1,
                resultado:"Ocurrio un error"});
               }
           }
       });

       connection.end();
  
});

app.post('/generosmusicales', (req, res) => {
    console.log(req.body.id);
    res.send('Enviaste una petición POST a /generosmusicales');
});

app.listen(8082, () => {
    console.log("Servidor express escuchando en el puerto 8082");
});
