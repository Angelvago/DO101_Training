/* se utilizan los comandos de instalacion
npm install express
npm intall (para este paso se requiere  que se realice un JSON con las propiedades del paquete)
npm start
*/
var express = require('express');
app=express();
app.get('/',function(req,res){
    res.send('Hello World !! \n');
});

app.get('/mars',function(req,res){
    res.send('Hello Mars !! \n');
});

app.get('/jupiter',function(req,res){
    res.send('Hello Jupiter !! \n');
});

app.listen(8080,function(){
    console.log('Ejecutando sobre el puerto 8080 \n');
});