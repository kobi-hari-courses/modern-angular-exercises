import {
  getState,
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialActorMoviesSlice } from './actor-movies.slice';
import { effect, inject } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap, tap } from 'rxjs';

export const ActorMoviesStore = signalStore(
  withState(initialActorMoviesSlice),
  withMethods((store) => {
    const data = inject(DataService);
    const reload = rxMethod<number>((trigger$) =>
      trigger$.pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap((id) =>
          data
            .getMoviesByActorId(id)
            .pipe(
              tap((res) =>
                patchState(store, {
                  movies: res.movies,
                  actor: res.actor,
                  loading: false,
                })
              )
            )
        )
      )
    );
    return {
      reload,
    };
  }),
  withHooks((store) => ({
    onInit: () => {
      effect(() => {
        console.log('Actor Movies Store', getState(store));
      });
    },
  }))
);
