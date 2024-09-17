import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/config.js';
import userRoutes from './routes/userRoutes.js';
import configRoutes from './routes/configRoutes.js';

// Configurar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Crear el servidor de Express
const app = express();

// Configurar middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/config', configRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
