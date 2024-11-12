const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Ruta para obtener todos los productos
router.get('/', productoController.getAllProductos);

// Ruta para obtener un producto por ID
router.get('/:id', productoController.getProductoById);

// Ruta para crear un nuevo producto
router.post('/', productoController.createProducto);

// Ruta para actualizar un producto
router.put('/:id', productoController.updateProducto);

// Ruta para eliminar un producto
router.delete('/:id', productoController.deleteProducto);

module.exports = router;
