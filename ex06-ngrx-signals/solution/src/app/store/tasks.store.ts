import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { initialTasksSlice } from "./tasks.slice";
import { computed } from "@angular/core";
import { generateId } from "../logic/id.helpers";
import { Task } from "../models/task.model";
import { addTask, removeTask, toggleTaskCompletion } from "./tasks.helpers";

export const TasksStore = signalStore(
    withState(initialTasksSlice), 
    withComputed(store => ({
        totalTasksCount: computed(() => store.tasks().length), 
        completedTasksCount: computed(() => store.tasks().filter(t => t.completed).length), 
        pendingTasksCount: computed(() => store.tasks().filter(t => !t.completed).length)
    })), 
    withMethods(store => ({
        addTask: (title: string) => 
            patchState(store, state => addTask(state, title)),
        toggleTaskCompletion: (id: number) => 
            patchState(store, state => toggleTaskCompletion(state, id)), 
        removeTask: (id: number) =>
            patchState(store, state => removeTask(state, id))
    }))

);