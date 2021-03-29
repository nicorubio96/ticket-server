// contiene todo el servidor de express + socket.io configurado
const Server = require('./class/Server');

// modulo para leer y establecer las variables de entorno
require('dotenv').config();


// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server express
server.execute();


