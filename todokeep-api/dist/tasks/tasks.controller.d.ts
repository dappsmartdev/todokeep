import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./task.schema").TaskDocument, {}> & import("./task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    create(dto: CreateTaskDto): Promise<import("mongoose").Document<unknown, {}, import("./task.schema").TaskDocument, {}> & import("./task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: {
        title?: string;
        completed?: boolean;
    }): Promise<(import("mongoose").Document<unknown, {}, import("./task.schema").TaskDocument, {}> & import("./task.schema").Task & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<void>;
}
