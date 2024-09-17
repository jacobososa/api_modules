import mongoose from 'mongoose';
import 'dotenv/config';

// Función para conectar a la base de datos
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
        process.exit(1); // Finaliza la aplicación si hay un error
    }
};

// Exporta la función como default
export default connectDB;
