import { generateId } from "../logic/id.helpers";
import { Task } from "../models/task.model";
import { TasksSlice } from "./tasks.slice";

export function addTask(state:TasksSlice, title: string): Partial<TasksSlice> {
    const newTask: Task = {
        id: generateId(),
        title,
        completed: false
    };

    return {tasks: [...state.tasks, newTask]};
}

export function newTask(title: string): Task {
    return {
        id: generateId(),
        title,
        completed: false
    };
}

export function toggleTaskCompletion(state: TasksSlice, id: number): Partial<TasksSlice> {
    const newTasks = state.tasks.map(t => t.id === id 
        ? {...t, completed: !t.completed}
        : t
    );

    return {tasks: newTasks};
}

export function toggleTask(task: Task): Task {
    return {...task, completed: !task.completed};
}

export function removeTask(state: TasksSlice, id: number): Partial<TasksSlice> {
    const newTasks = state.tasks.filter(t => t.id !== id);

    return {tasks: newTasks};
}

export function getFilteredTasks(filter: string, tasks: Task[]): Task[] {
    filter = filter
        .trim()
        .toLowerCase();

    if (!filter) {
        return tasks;
    }

    return tasks.filter(t => t.title.toLowerCase().includes(filter));
}

export function setLoading(): Partial<TasksSlice> {
    return {loadState: 'loading'};
}

export function setIdle(): Partial<TasksSlice> {
    return {loadState: 'idle'};
}