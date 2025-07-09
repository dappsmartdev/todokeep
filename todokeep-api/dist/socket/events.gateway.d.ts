import { Server, Socket } from 'socket.io';
export declare class EventsGateway {
    server: Server;
    afterInit(server: any): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleJoinBoard(client: Socket, boardId: string): void;
    handleBoardNew(data: any): void;
    handleBoardUpdate(data: any): void;
    handleBoardDelete(id: string): void;
    handleTaskNew(data: any): void;
    handleTaskUpdate(data: any): void;
    handleTaskDelete(id: string): void;
}
