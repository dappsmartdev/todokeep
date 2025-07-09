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
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const board_schema_1 = require("./board.schema");
const event_emitter_1 = require("@nestjs/event-emitter");
const task_schema_1 = require("../tasks/task.schema");
let BoardsService = class BoardsService {
    boardModel;
    taskModel;
    eventEmitter;
    constructor(boardModel, taskModel, eventEmitter) {
        this.boardModel = boardModel;
        this.taskModel = taskModel;
        this.eventEmitter = eventEmitter;
    }
    async getBoardWithTasks(boardId) {
        const board = await this.boardModel.findById(boardId).exec();
        if (!board)
            throw new common_1.NotFoundException('Board not found');
        const tasks = await this.taskModel.find({
            boardId,
        }).exec();
        return { ...board.toObject(), tasks };
    }
    async findAll() {
        return this.boardModel.find().exec();
    }
    async create(dto) {
        const created = await this.boardModel.create(dto);
        this.eventEmitter.emit('board.new', created);
        return created;
    }
    async update(id, title) {
        const updated = await this.boardModel.findByIdAndUpdate(id, { title }, { new: true }).exec();
        this.eventEmitter.emit('board.update', updated);
        return updated;
    }
    async delete(id) {
        await this.boardModel.findByIdAndDelete(id).exec();
        await this.taskModel.deleteMany({ boardId: id }).exec();
        this.eventEmitter.emit('board.delete', id);
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(board_schema_1.Board.name)),
    __param(1, (0, mongoose_1.InjectModel)(task_schema_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        event_emitter_1.EventEmitter2])
], BoardsService);
//# sourceMappingURL=boards.service.js.map