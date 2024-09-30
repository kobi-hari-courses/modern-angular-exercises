import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { initialTasksSlice } from "./tasks.slice";
import { computed, effect } from "@angular/core";
import { addTask, getFilteredTasks, removeTask, toggleTaskCompletion } from "./tasks.helpers";

export const TasksStore = signalStore(
    {providedIn: 'root'},
    withState(initialTasksSlice), 
    withComputed(store => ({
        totalTasksCount: computed(() => store.tasks().length), 
        completedTasksCount: computed(() => store.tasks().filter(t => t.completed).length), 
        pendingTasksCount: computed(() => store.tasks().filter(t => !t.completed).length),
        filteredTasks: computed(() => getFilteredTasks(store.filter(), store.tasks()))
    })), 
    withMethods(store => ({
        addTask: (title: string) => {},
        toggleTaskCompletion: (id: number) => {},
        removeTask: (id: number) => {},
        setFilter: (filter: string) =>
            patchState(store, state => ({...state, filter}))
    })), 
    withHooks(store => ({
        onInit() {
        }
    }))
);