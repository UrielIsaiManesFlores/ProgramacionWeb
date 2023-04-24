let http = require('http');

let.servidor = http.createServer(function (req,res){
    res.write("servidor HTTP y contestando rapido!!");
    res.end();
})

servidor.Listen(8801, () => {console.log('Servidor http listo')});