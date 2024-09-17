// Controlador para manejar la configuración
export const getConfig = (req, res) => {
    // Lógica para obtener configuraciones
    res.json({ message: 'Configuraciones obtenidas' });
};

export const updateConfig = (req, res) => {
    // Lógica para actualizar configuraciones
    res.json({ message: 'Configuración actualizada' });
};
