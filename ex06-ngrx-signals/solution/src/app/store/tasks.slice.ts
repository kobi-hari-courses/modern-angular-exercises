import { MOCK_TASKS } from "../data/tasks.mock";
import { Task } from "../models/task.model";

export interface TasksSlice {
    readonly tasks: Task[];
    readonly filter: string;
}

export const initialTasksSlice: TasksSlice = {
    tasks: MOCK_TASKS, 
    filter: ''
} 
