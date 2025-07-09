import { Document } from 'mongoose';
export declare class Task {
    title: string;
    content: string;
    completed: boolean;
    boardId: string;
}
export type TaskDocument = Task & Document;
export declare const TaskSchema: import("mongoose").Schema<Task, import("mongoose").Model<Task, any, any, any, Document<unknown, any, Task, any> & Task & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Task, Document<unknown, {}, import("mongoose").FlatRecord<Task>, {}> & import("mongoose").FlatRecord<Task> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
