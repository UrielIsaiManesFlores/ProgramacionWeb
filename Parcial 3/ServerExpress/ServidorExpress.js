const express = require('express');
const app = express();


app.post('/empleado', (req, res) => {
    res.json({respuesta: "Respuesta a peticion post"})
})

app.get('/', (req, res) => {
    res.json({respuesta: "Respuesta a peticion get"})
})

app.listen(8082, () => {
    console.log('servidor espress escuchando en puerto 8802');
})