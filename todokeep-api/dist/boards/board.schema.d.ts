import { Document } from 'mongoose';
export declare class Board {
    title: string;
    taskIds: string[];
}
export type BoardDocument = Board & Document;
export declare const BoardSchema: import("mongoose").Schema<Board, import("mongoose").Model<Board, any, any, any, Document<unknown, any, Board, any> & Board & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Board, Document<unknown, {}, import("mongoose").FlatRecord<Board>, {}> & import("mongoose").FlatRecord<Board> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
