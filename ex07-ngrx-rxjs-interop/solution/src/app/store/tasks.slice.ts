import { MOCK_TASKS } from "../data/tasks.mock";
import { LoadState } from "../models/load-state.model";
import { Task } from "../models/task.model";

export interface TasksSlice {
    readonly tasks: Task[];
    readonly filter: string;
    readonly loadState: LoadState;
}

export const initialTasksSlice: TasksSlice = {
    tasks: [], 
    filter: '', 
    loadState: 'idle'
} 


