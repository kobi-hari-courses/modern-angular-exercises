import { effect } from "@angular/core";
import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";

export interface CounterSlice {
    readonly count: number;
}

export const initialCounterSlice: CounterSlice = {
    count: 0
}

export const CounterService = signalStore(
  {providedIn: 'root'},
  withState(initialCounterSlice), 
  withMethods(store => ({
    isAllowed: async () => {
      patchState(store, {count: store.count() + 1});
      await new Promise(res => setTimeout(res, 2000));
      return store.count() <= 3;
    }, 
    reset: () => {
      patchState(store, {count: 0});
    }
  })),
  withHooks(store => ({
    onInit: () => {
      effect(() => {
        console.log('Counter Store', store.count());
      })
  }}))
)