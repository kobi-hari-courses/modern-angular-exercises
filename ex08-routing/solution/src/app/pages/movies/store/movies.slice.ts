import { Movie } from "../../../models/movie.model";

export interface MoviesSlice {
    readonly movies: Movie[];
    readonly loading: boolean;  

}

export const initialMoviesSlice: MoviesSlice = {
    movies: [],
    loading: false,
};