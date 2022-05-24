const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;

app.use(express.static('public'));


app.listen(PORT, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/view/login.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});                                         