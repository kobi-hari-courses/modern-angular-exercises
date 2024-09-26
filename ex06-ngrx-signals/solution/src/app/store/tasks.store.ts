import { signalStore, withState } from "@ngrx/signals";
import { initialTasksSlice } from "./tasks.slice";

export const TasksStore = signalStore(
    withState(initialTasksSlice)
);