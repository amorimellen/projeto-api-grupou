const express = require("express");
const bodyParser = require("body-parser");

const db = require('./app/db/models');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({
        message: "Grupou."
    })
})

require('./app/routes')(app);

app.listen(3001,()=>{
console.log("Servidor Iniciado.")
})