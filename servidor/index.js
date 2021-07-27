const express = require('express');
// const conectarDB = require('conectarDB');
const conectarDB = require('./config/db');

//Se crea el servidor
const app = express();

//Se conecta a la Base de Datos
conectarDB()

//
app.use('/api/productos', require('./routes/producto'));

// se define la ruta principal
// app.get('/', (req, res) => {
//     res.send('hola mundo')
// })
app.listen(4000, () => {
    console.log('perfecto servidor run');
})