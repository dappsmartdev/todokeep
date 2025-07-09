import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Board, BoardSchema } from './board.schema';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TasksModule } from 'src/tasks/tasks.module';
import { Task, TaskSchema } from 'src/tasks/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }, { name: Task.name, schema: TaskSchema }]),
    EventEmitterModule.forRoot(),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}