"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const event_emitter_1 = require("@nestjs/event-emitter");
let EventsGateway = class EventsGateway {
    server;
    afterInit(server) {
        console.log('WebSocket gateway initialized');
    }
    handleConnection(client) {
        console.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
    }
    handleJoinBoard(client, boardId) {
        client.join(boardId);
        console.log(`Client ${client.id} joined board ${boardId}`);
    }
    handleBoardNew(data) {
        this.server.emit('board:new', data);
    }
    handleBoardUpdate(data) {
        this.server.emit('board:update', data);
    }
    handleBoardDelete(id) {
        this.server.emit('board:delete', id);
    }
    handleTaskNew(data) {
        const { boardId, ...task } = data;
        this.server.emit('task:new', task._doc);
    }
    handleTaskUpdate(data) {
        const { boardId, ...task } = data;
        this.server.emit('task:update', task._doc);
    }
    handleTaskDelete(id) {
        this.server.emit('task:delete', id);
    }
};
exports.EventsGateway = EventsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], EventsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('join-board'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleJoinBoard", null);
__decorate([
    (0, event_emitter_1.OnEvent)('board.new'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleBoardNew", null);
__decorate([
    (0, event_emitter_1.OnEvent)('board.update'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleBoardUpdate", null);
__decorate([
    (0, event_emitter_1.OnEvent)('board.delete'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleBoardDelete", null);
__decorate([
    (0, event_emitter_1.OnEvent)('task.new'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleTaskNew", null);
__decorate([
    (0, event_emitter_1.OnEvent)('task.update'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleTaskUpdate", null);
__decorate([
    (0, event_emitter_1.OnEvent)('task.delete'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleTaskDelete", null);
exports.EventsGateway = EventsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)()
], EventsGateway);
//# sourceMappingURL=events.gateway.js.map