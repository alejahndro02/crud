const Producto = require("../models/Producto");

// const Producto = require('../models/Producto');
exports.crearProducto = async(req, res) => {
    try {
        let producto;
        //se crea el producto
        producto = new Producto(req.body)

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}