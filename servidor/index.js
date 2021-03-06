const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Se crea el servidor
const app = express();

//Se conecta a la Base de Datos
conectarDB();

//se configura un middleware
app.use(cors());
app.use(express.json());
app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {});