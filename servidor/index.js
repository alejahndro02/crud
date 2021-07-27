const express = require('express');
// const conectarDB = require('conectarDB');
const conectarDB = require('./config/db');

//Se crea el servidor
const app = express();

//Se conecta a la Base de Datos
conectarDB()

//
app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {})