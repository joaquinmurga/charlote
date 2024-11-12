const db = require('../config/db'); // Tu conexión a la base de datos MySQL

// Obtener todos los productos
exports.getAllProductos = async () => {
  const [rows] = await db.execute('SELECT * FROM producto');
  return rows;
};

// Obtener un producto por ID
exports.getProductoById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM producto WHERE id = ?', [id]);
  return rows[0];
};

// Crear un nuevo producto
exports.createProducto = async (productoData) => {
  console.log("estoy aqui");
  const { id_categoria, id_tipo, name, description, img_url, precio_costo, precio_venta, precio_kg, stock_cantidad, stock_kg, codigo_fabrica } = productoData;
  const [result] = await db.execute(
    'INSERT INTO producto (id_categoria, id_tipo, name, description, img_url, precio_costo, precio_venta, precio_kg, stock_cantidad, stock_kg, codigo_fabrica) VALUES (?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?)',
    [id_categoria, id_tipo, name, description, img_url, precio_costo, precio_venta, precio_kg, stock_cantidad, stock_kg, codigo_fabrica]
  );
  console.log(productoData);
  return result.insertId;
};

// Actualizar un producto por ID
exports.updateProducto = async (id, productoData) => {
  const { id_categoria, id_tipo, name, description, img_url, precio_costo, precio_venta, precio_kg, stock_cantidad, stock_kg } = productoData;
  const [result] = await db.execute(
    'UPDATE producto SET id_categoria = ?, id_tipo = ?, name = ?, description = ?, img_url = ?, precio_costo = ?, precio_venta = ?, precio_kg = ?, stock_cantidad = ?, stock_kg = ? WHERE id = ?',
    [id_categoria, id_tipo, name, description, img_url, precio_costo, precio_venta, precio_kg, stock_cantidad, stock_kg, id]
  );
  return result.affectedRows;
};

// Eliminar un producto por ID
exports.deleteProducto = async (id) => {
  const [result] = await db.execute('DELETE FROM producto WHERE id = ?', [id]);
  return result.affectedRows;
};
