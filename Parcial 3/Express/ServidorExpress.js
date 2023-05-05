const express = require('express')
const app = express();

app.use(express.json());

app.post('/usuarios', (req, res)=>{
    console.log(req.body.numero);
    res.send('Servidor Express contestando a petcion')
})

app.get('/usuarios', (req, res)=>{
    console.log(req.query)
    res.json({peticion:"get",nombre:req.query.nombre})
})

app.listen(8082, (req, res)=>{
    console.log('Servidor express escuchando en pto 8082')
})