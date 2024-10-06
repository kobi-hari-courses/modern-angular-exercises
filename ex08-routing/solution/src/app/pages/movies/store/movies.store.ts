import { getState, patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { initialMoviesSlice } from "./movies.slice";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { exhaustMap, switchMap, tap } from "rxjs";
import { effect, inject } from "@angular/core";
import { DataService } from "../../../services/data.service";

export const MoviesStore = signalStore(
    withState(initialMoviesSlice), 
    withMethods(store => {
        const data = inject(DataService);
        const reload = rxMethod<void>(trigger$ => trigger$.pipe(
            tap(() => patchState(store, {loading: true})),
            exhaustMap(() => data.getAllMovies().pipe(
                tap(res => {
                    patchState(store, {movies: res, loading: false})
                })
            ))
        ))
        return {
            reload
        }
    }), 
    withHooks(store => ({
        onInit: () => {
            store.reload();
            effect(() => {
                console.log('Movies Store', getState(store))
            })
        }
    }))
)