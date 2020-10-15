var express=require('express');
var app=express();

app.get('/',ck_inicio);

app.get('/saludo',ck_saludo);

function ck_inicio(req, res){
    res.send("<h1>Express : INICIO</h1>");

}

function ck_saludo(req,res){
        res.send("<h1>Hola Marco Sullca</h1>");
}
function ck_servidor(){
    var host=server.address().address;
    var port=server.address().port;
    console.log(host + ' : '+ port);
}

var server=app.listen(8000, ck_servidor);



