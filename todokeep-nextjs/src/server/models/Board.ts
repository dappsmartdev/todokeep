import { Schema, model, models } from 'mongoose';

export interface IBoard {
  title: string;
  tasks: string[];
  members: string[];
  imageUrl?: string;
}

const BoardSchema = new Schema<IBoard>({
  title: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  members: [String],
  imageUrl: String,
}, { timestamps: true });

export default models.Board || model('Board', BoardSchema);