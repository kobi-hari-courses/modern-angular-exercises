import { Movie } from '../../../models/movie.model';

export function movieImageUrl(movie: Movie | null, baseUrl: string): string {
  if (!movie) return '';

  return movie ? `${baseUrl}/movies/${movie.posterImage}` : '';
}
