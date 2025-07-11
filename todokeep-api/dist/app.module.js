"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const boards_module_1 = require("./boards/boards.module");
const tasks_module_1 = require("./tasks/tasks.module");
const socket_gateway_1 = require("./socket/socket.gateway");
const upload_module_1 = require("./upload/upload.module");
const mongoose_1 = require("@nestjs/mongoose");
const event_emitter_1 = require("@nestjs/event-emitter");
const events_gateway_1 = require("./socket/events.gateway");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/todokeep-api'),
            boards_module_1.BoardsModule,
            tasks_module_1.TasksModule,
            upload_module_1.UploadModule,
            events_gateway_1.EventsGateway,
            event_emitter_1.EventEmitterModule.forRoot()
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, socket_gateway_1.SocketGateway],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map