import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplicationContext } from '@nestjs/common';
export declare class SocketIoAdapter extends IoAdapter {
    private readonly allowedOrigin;
    constructor(app: INestApplicationContext);
    createIOServer(port: number, options?: any): any;
}
