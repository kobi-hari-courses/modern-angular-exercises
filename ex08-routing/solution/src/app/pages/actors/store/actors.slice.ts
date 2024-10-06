import { Actor } from "../../../models/actor.model";

export interface ActorsSlice {
    readonly actors: Actor[];
    readonly loading: boolean;  

}

export const initialActorsSlice: ActorsSlice = {
    actors: [],
    loading: false,
};