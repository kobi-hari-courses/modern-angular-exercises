import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { initialTasksSlice } from "./tasks.slice";
import { computed, effect, inject } from "@angular/core";
import { addTask, getFilteredTasks, removeTask, setIdle, setLoading, toggleTaskCompletion } from "./tasks.helpers";
import { readableStreamLikeToAsyncGenerator } from "rxjs/internal/util/isReadableStreamLike";
import { DataService } from "../services/data.service";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { exhaustMap, map, tap } from "rxjs";

export const TasksStore = signalStore(
    {providedIn: 'root'},
    withState(initialTasksSlice), 
    withComputed(store => ({
        totalTasksCount: computed(() => store.tasks().length), 
        completedTasksCount: computed(() => store.tasks().filter(t => t.completed).length), 
        pendingTasksCount: computed(() => store.tasks().filter(t => !t.completed).length),
        filteredTasks: computed(() => getFilteredTasks(store.filter(), store.tasks()))
    })), 
    withMethods(store => { 
        const dataService = inject(DataService);
        return {
            _reload: rxMethod<void>(trigger$ => trigger$.pipe(
                tap(() => patchState(store, setLoading())), 
                exhaustMap(() => dataService.getAllTasks()), 
                tap(tasks => patchState(store, ({tasks}), setIdle()))
            )),
            addTask: (title: string) => {},
            toggleTaskCompletion: (id: number) => {},
            removeTask: (id: number) => {},
            setFilter: (filter: string) =>
                patchState(store, state => ({...state, filter}))
        }}), 
    withHooks(store => ({
        onInit() {
            store._reload();
        }
    }))
);