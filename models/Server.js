import express from 'express';
import Socket from './Socket.js';

class Server {
    constructor() {
        this.app = express();
        this.port = 8080;
    }

    middlewares() {
        this.app.use(express.static('public'));
    }

    iniciarServidor() {

        this.middlewares();
        const httpServer = this.app.listen(this.port, () => {
            console.log(`Servidor listo y corriendo en puerto: ${this.port}`);
        });

        const server = new Socket(httpServer);
    }
}


export default Server;