require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productoRoutes = require('./routes/productoRoutes');

const app = express();

// Configurar CORS para permitir solicitudes desde otros orígenes
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de usuario
app.use('/api', userRoutes);
app.use('/api/productos', productoRoutes);

// Configurar el puerto y lanzar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
