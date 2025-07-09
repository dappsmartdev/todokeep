import { Model } from 'mongoose';
import { Board, BoardDocument } from './board.schema';
import { CreateBoardDto } from './dto/create-board.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class BoardsService {
    private boardModel;
    private taskModel;
    private eventEmitter;
    constructor(boardModel: Model<BoardDocument>, taskModel: Model<BoardDocument>, eventEmitter: EventEmitter2);
    getBoardWithTasks(boardId: string): Promise<{
        tasks: (import("mongoose").Document<unknown, {}, BoardDocument, {}> & Board & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        title: string;
        taskIds: string[];
        _id: unknown;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema;
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, BoardDocument, {}> & Board & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    create(dto: CreateBoardDto): Promise<import("mongoose").Document<unknown, {}, BoardDocument, {}> & Board & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, title: string): Promise<(import("mongoose").Document<unknown, {}, BoardDocument, {}> & Board & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<void>;
}
