import {
  getState,
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialTasksSlice } from './tasks.slice';
import { computed, effect, inject } from '@angular/core';
import {
  addTask,
  getFilteredTasks,
  newTask,
  removeTask,
  setIdle,
  setLoading,
  toggleTask,
  toggleTaskCompletion,
} from './tasks.helpers';
import { readableStreamLikeToAsyncGenerator } from 'rxjs/internal/util/isReadableStreamLike';
import { DataService } from '../services/data.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, map, mergeMap, tap } from 'rxjs';

export const TasksStore = signalStore(
  { providedIn: 'root' },
  withState(initialTasksSlice),
  withComputed((store) => ({
    totalTasksCount: computed(() => store.tasks().length),
    completedTasksCount: computed(
      () => store.tasks().filter((t) => t.completed).length
    ),
    pendingTasksCount: computed(
      () => store.tasks().filter((t) => !t.completed).length
    ),
    filteredTasks: computed(() =>
      getFilteredTasks(store.filter(), store.tasks())
    ),
  })),
  withMethods((store) => {
    const dataService = inject(DataService);
    const _reload = rxMethod<void>((trigger$) =>
      trigger$.pipe(
        tap(() => patchState(store, setLoading())),
        exhaustMap(() => dataService.getAllTasks()),
        tap((tasks) => patchState(store, { tasks }, setIdle()))
      )
    );

    return {
      _reload,
      addTask: rxMethod<string>((trigger$) =>
        trigger$.pipe(
          tap(() => patchState(store, setLoading())),
          mergeMap((title) =>
            dataService.createNewTask(newTask(title)).pipe(tap(() => _reload()))
          )
        )
      ),
      toggleTaskCompletion: rxMethod<number>((trigger$) =>
        trigger$.pipe(
          tap(() => patchState(store, setLoading())),
          map((id) => store.tasks().find((t) => t.id === id)!),
          mergeMap((task) =>
            dataService.updateTask(toggleTask(task)).pipe(tap(() => _reload()))
          )
        )
      ),
      removeTask: rxMethod<number>((trigger$) =>
        trigger$.pipe(
          tap(() => patchState(store, setLoading())),
          mergeMap((id) =>
            dataService.deleteTask(id).pipe(tap(() => _reload()))
          )
        )
      ),
      setFilter: (filter: string) =>
        patchState(store, (state) => ({ ...state, filter })),
    };
  }),
  withHooks((store) => ({
    onInit() {
      store._reload();
    },
  }))
);
