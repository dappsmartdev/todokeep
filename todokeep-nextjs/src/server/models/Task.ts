import { Schema, model, models } from 'mongoose';

export interface ITask {
  title: string;
  content: string;
  completed: boolean;
  creator: string;
  boardId: string;
}

const TaskSchema = new Schema<ITask>({
  title: String,
  content: String,
  completed: Boolean,
  creator: String,
  boardId: { type: Schema.Types.ObjectId, ref: 'Board' },
}, { timestamps: true });

export default models.Task || model('Task', TaskSchema);