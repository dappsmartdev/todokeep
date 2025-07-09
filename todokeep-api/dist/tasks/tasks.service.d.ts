import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class TasksService {
    private taskModel;
    private eventEmitter;
    constructor(taskModel: Model<TaskDocument>, eventEmitter: EventEmitter2);
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    create(dto: CreateTaskDto): Promise<import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, data: Partial<{
        title: string;
        completed: boolean;
    }>): Promise<(import("mongoose").Document<unknown, {}, TaskDocument, {}> & Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<void>;
}
