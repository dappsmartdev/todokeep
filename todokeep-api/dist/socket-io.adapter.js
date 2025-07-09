"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIoAdapter = void 0;
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
class SocketIoAdapter extends platform_socket_io_1.IoAdapter {
    allowedOrigin = 'http://localhost:4000';
    constructor(app) {
        super(app);
    }
    createIOServer(port, options) {
        const cors = {
            origin: this.allowedOrigin,
            methods: ['GET', 'POST'],
            credentials: true,
        };
        const optionsWithCORS = {
            ...options,
            cors: cors,
        };
        return super.createIOServer(port, optionsWithCORS);
    }
}
exports.SocketIoAdapter = SocketIoAdapter;
//# sourceMappingURL=socket-io.adapter.js.map