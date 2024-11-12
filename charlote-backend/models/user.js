const db = require('../config/db');

// Crear un usuario
exports.createUser = (userData, callback) => {
  const query = 'INSERT INTO user (name, lastname, email, password, rol) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [userData.name, userData.lastname, userData.email, userData.password, userData.rol], callback);
};

// Obtener todos los usuarios
exports.getAllUsers = (callback) => {
  const query = 'SELECT * FROM user';
  db.query(query, callback);
};

// Obtener un usuario por ID
exports.getUserById = (id, callback) => {
  const query = 'SELECT * FROM user WHERE id = ?';
  db.query(query, [id], callback);
};

// Actualizar un usuario
exports.updateUser = (id, userData, callback) => {
  const query = 'UPDATE user SET name = ?, lastname = ?, email = ?, password = ?, rol = ? WHERE id = ?';
  db.query(query, [userData.name, userData.lastname, userData.email, userData.password, userData.rol, id], callback);
};

// Eliminar un usuario
exports.deleteUser = (id, callback) => {
  const query = 'DELETE FROM user WHERE id = ?';
  db.query(query, [id], callback);
};


// models/user.js
exports.findByEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    throw new Error('El email y el password son requeridos');
  }
  console.log("en el modelo: ", { email, password });
  
  const query = 'SELECT * FROM user WHERE email = ? AND password = ?';
  try {
    const result = await db.execute(query, [email, password]);
    console.log("Resultados de la consulta SQL (formato completo):", result);  // Muestra el formato completo de los resultados
    
    const [rows] = result;  // Solo desestructura aquí si estás seguro del formato
    
    if (rows.length === 0) {
      throw new Error('No se encontraron resultados');
    }

    return rows[0];  // Retorna el primer usuario encontrado
  } catch (error) {
    console.error('Error en la consulta SQL:', error);
    throw error;
  }
};
