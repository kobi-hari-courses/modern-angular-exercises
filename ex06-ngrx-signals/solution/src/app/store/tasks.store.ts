import { signalStore, withComputed, withState } from "@ngrx/signals";
import { initialTasksSlice } from "./tasks.slice";
import { computed } from "@angular/core";

export const TasksStore = signalStore(
    withState(initialTasksSlice), 
    withComputed(store => ({
        totalTasksCount: computed(() => store.tasks().length), 
        completedTasksCount: computed(() => store.tasks().filter(t => t.completed).length), 
        pendingTasksCount: computed(() => store.tasks().filter(t => !t.completed).length)
    }))
);