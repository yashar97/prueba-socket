import { Server } from "socket.io";

class Socket {
    constructor(io) {
        this.io = new Server(io);

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', socket => {

            socket.on('mensaje-frontend', data => {
                this.io.emit('mensaje-backend', data);
            });


        });
    }

}

export default Socket;