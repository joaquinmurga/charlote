const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas para CRUD de usuarios
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;
