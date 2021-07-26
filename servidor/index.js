console.log('Aqui en el js de backEnd');
//Se crea el servidor
const express = require('express');
const app = express();
// se define la ruta principal
app.get('/', (req, res) => {
    res.send('hola mundo')
})
app.listen(4000, () => {
    console.log('perfecto servidor run');
})