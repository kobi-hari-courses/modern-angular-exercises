import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL_TOKEN } from '../tokens/base-url.token';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly http = inject(HttpClient);
  readonly baseUrl = inject(BASE_URL_TOKEN);

  getAllMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movies`;
    return this.http.get<Movie[]>(url);
  }

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.baseUrl}/movies/${id}`;
    return this.http.get<Movie>(url);
  }

  getAllActors(): Observable<Actor[]> {
    const url = `${this.baseUrl}/actors`;
    return this.http.get<Actor[]>(url);
  }

  getActorById(id: number): Observable<Actor> {
    const url = `${this.baseUrl}/actors/${id}`;
    return this.http.get<Actor>(url);
  }

  getActorByName(name: string): Observable<Actor> {
    const url = `${this.baseUrl}/actors?fullName=${name}`;
    return this.http.get<Actor>(url);
  }

  getMoviesByActorName(name: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/movies?cast_like=${name}`;
    return this.http.get<Movie[]>(url);
  }

}
