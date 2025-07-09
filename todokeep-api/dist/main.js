"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const socket_io_adapter_1 = require("./socket-io.adapter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:4000',
        credentials: false,
    });
    app.setGlobalPrefix('api');
    app.useWebSocketAdapter(new socket_io_adapter_1.SocketIoAdapter(app));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('TodoKeep API')
        .setDescription('API for managing boards and tasks')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map