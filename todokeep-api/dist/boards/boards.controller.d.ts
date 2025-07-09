import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    findOne(id: string): Promise<{
        tasks: (import("mongoose").Document<unknown, {}, import("./board.schema").BoardDocument, {}> & import("./board.schema").Board & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
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
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./board.schema").BoardDocument, {}> & import("./board.schema").Board & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    create(dto: CreateBoardDto): Promise<import("mongoose").Document<unknown, {}, import("./board.schema").BoardDocument, {}> & import("./board.schema").Board & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, title: string): Promise<(import("mongoose").Document<unknown, {}, import("./board.schema").BoardDocument, {}> & import("./board.schema").Board & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<void>;
}
