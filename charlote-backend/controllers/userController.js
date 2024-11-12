const User = require('../models/user');

// Crear usuario
exports.createUser = (req, res) => {
  const userData = req.body;
  User.createUser(userData, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    } else {
      res.status(201).json({ message: 'Usuario creado exitosamente', userId: results.insertId });
    }
  });
};

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
  User.getAllUsers((error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    } else {
      res.status(200).json(results);
    }
  });
};

// Obtener un usuario por ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;
  User.getUserById(userId, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error al obtener el usuario' });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

// Actualizar un usuario
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  User.updateUser(userId, userData, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    } else {
      res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    }
  });
};

// Eliminar un usuario
exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  User.deleteUser(userId, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    } else {
      res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    }
  });
};

// Iniciar sesión
exports.login = async (req, res) => {
  const { id, password } = req.body;
  
  console.log(req.body);
  console.log('Datos recibidos en el controlador:', { id, password });

  try {
    const user = await User.findByEmailAndPassword(id, password);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error al buscar usuario:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};