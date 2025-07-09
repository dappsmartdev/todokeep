import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SocketIoAdapter } from './socket-io.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 👇 Enable CORS for HTTP routes
  app.enableCors({
    origin: 'http://localhost:4000', // Allow frontend origin
    credentials: false,
  });

  // Add global prefix
  app.setGlobalPrefix('api');

  // 👇 Use custom adapter for Socket.IO
  app.useWebSocketAdapter(new SocketIoAdapter(app));
  
  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('TodoKeep API')
    .setDescription('API for managing boards and tasks')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();