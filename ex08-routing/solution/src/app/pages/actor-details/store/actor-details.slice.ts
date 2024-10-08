import { Actor } from "../../../models/actor.model";

export interface ActorDetailsSlice {
    readonly actor: Actor | null;
    readonly loading: boolean;
}

export const initialActorDetailsSlice: ActorDetailsSlice = {   
    actor: null,
    loading: false,
}