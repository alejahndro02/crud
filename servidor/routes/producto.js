// Rutas para el producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productosController');

//api/productos
router.post('/', productoController.crearProducto)
router.get('/', productoController.obtenerProductos)
module.exports = router;