const Producto = require("../models/Producto");

// const Producto = require('../models/Producto');
exports.crearProducto = async(req, res) => {
    try {
        let producto;
        //se crea el producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async(req, res) => {

    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarProductos = async(req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: 'No existe e producto' });
        }
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;
        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true })
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');

    }
}
exports.obtenerProducto = async(req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: 'No existe e producto' });
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');

    }
}