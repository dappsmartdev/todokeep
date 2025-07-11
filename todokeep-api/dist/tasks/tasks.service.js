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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_schema_1 = require("./task.schema");
const event_emitter_1 = require("@nestjs/event-emitter");
let TasksService = class TasksService {
    taskModel;
    eventEmitter;
    constructor(taskModel, eventEmitter) {
        this.taskModel = taskModel;
        this.eventEmitter = eventEmitter;
    }
    async findOne(id) {
        return this.taskModel.findById(id).exec();
    }
    async create(dto) {
        const created = await this.taskModel.create(dto);
        this.eventEmitter.emit('task.new', created);
        return created;
    }
    async update(id, data) {
        const updated = await this.taskModel.findByIdAndUpdate(id, data, { new: true }).exec();
        this.eventEmitter.emit('task.update', updated);
        return updated;
    }
    async delete(id) {
        await this.taskModel.findByIdAndDelete(id).exec();
        this.eventEmitter.emit('task.delete', id);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_schema_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        event_emitter_1.EventEmitter2])
], TasksService);
//# sourceMappingURL=tasks.service.js.map