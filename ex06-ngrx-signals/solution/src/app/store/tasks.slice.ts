import { MOCK_TASKS } from "../data/tasks.mock";
import { Task } from "../models/task.model";

export interface TasksSlice {
    readonly tasks: Task[];
}

export const initialTasksSlice: TasksSlice = {
    tasks: MOCK_TASKS
} 
