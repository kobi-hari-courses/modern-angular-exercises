import { Movie } from "../../../models/movie.model";

export interface MovideDetailsSlice {
    readonly movie: Movie | null;
    readonly loading: boolean;
}

export const initialMovieDetailsSlice: MovideDetailsSlice = {   
    movie: null,
    loading: false,
}