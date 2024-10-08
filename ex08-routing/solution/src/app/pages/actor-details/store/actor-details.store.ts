import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { computed, effect, inject } from "@angular/core";
import { DataService } from "../../../services/data.service";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { switchMap, tap } from "rxjs";
import { BASE_URL_TOKEN } from "../../../tokens/base-url.token";
import { initialActorDetailsSlice } from "./actor-details.slice";
import { actorImageUrl } from "./actor-details.helpers";

export const ActorDetailsStore = signalStore(
    withState(initialActorDetailsSlice), 
    withComputed(store => {
        const baseUrl = inject(BASE_URL_TOKEN);
        return {
            imageUrl: computed(() => actorImageUrl(store.actor(), baseUrl))
        }
    }),
    withMethods(store => {
        const data = inject(DataService);
        const reload = rxMethod<number>(trigger$ => trigger$.pipe(
            tap(() => patchState(store, {loading: true})),
            switchMap(id => data.getActorById(id).pipe(
                tap(res => patchState(store, {actor: res, loading: false}))
            ))
        ))

        return {
            reload
        }
    }), 
    withHooks(store => ({
        onInit: () => {
            effect(() => {
                console.log('Actor Details Store', getState(store))
        })
    }}))
)