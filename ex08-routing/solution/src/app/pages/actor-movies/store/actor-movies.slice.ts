import { Actor } from "../../../models/actor.model";
import { Movie } from "../../../models/movie.model";

export interface ActorMoviesSlice {
    readonly movies: Movie[];
    readonly actor: Actor | null;
    readonly loading: boolean;
}

export const initialActorMoviesSlice: ActorMoviesSlice = {  
    movies: [],
    actor: null,
    loading: false,
}