import { Task } from "../models/task.model";

export function markTaskAsCompleted(tasks: Task[], name: string): Task[] {
    return tasks.map(task => task.name === name 
        ? { ...task, completed: true }
        : task
    )
}

export function addTask(tasks: Task[], name: string): Task[] {
    return [...tasks, { name, completed: false }]
}