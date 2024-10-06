import { getState, patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { exhaustMap, switchMap, tap } from "rxjs";
import { effect, inject } from "@angular/core";
import { DataService } from "../../../services/data.service";
import { initialActorsSlice } from "./actors.slice";

export const ActorsStore = signalStore(
    withState(initialActorsSlice), 
    withMethods(store => {
        const data = inject(DataService);
        const reload = rxMethod<void>(trigger$ => trigger$.pipe(
            tap(() => patchState(store, {loading: true})),
            exhaustMap(() => data.getAllActors().pipe(
                tap(res => {
                    patchState(store, {actors: res, loading: false})
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
                console.log('Actors Store', getState(store))
            })
        }
    }))
)