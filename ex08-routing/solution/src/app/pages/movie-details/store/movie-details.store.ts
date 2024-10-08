import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { initialMovieDetailsSlice } from "./movie-details.slice";
import { computed, effect, inject } from "@angular/core";
import { DataService } from "../../../services/data.service";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { switchMap, tap } from "rxjs";
import { BASE_URL_TOKEN } from "../../../tokens/base-url.token";
import { movieImageUrl } from "./movie-details.helpers";

export const MovieDetailsStore = signalStore(
    withState(initialMovieDetailsSlice), 
    withComputed(store => {
        const baseUrl = inject(BASE_URL_TOKEN);
        return {
            imageUrl: computed(() => movieImageUrl(store.movie(), baseUrl))
        }
    }),
    withMethods(store => {
        const data = inject(DataService);
        const reload = rxMethod<number>(trigger$ => trigger$.pipe(
            tap(() => patchState(store, {loading: true})),
            switchMap(id => data.getMovieById(id).pipe(
                tap(res => patchState(store, {movie: res, loading: false}))
            ))
        ))

        return {
            reload
        }
    }), 
    withHooks(store => ({
        onInit: () => {
            effect(() => {
                console.log('Movie Details Store', getState(store))
        })
    }}))
)