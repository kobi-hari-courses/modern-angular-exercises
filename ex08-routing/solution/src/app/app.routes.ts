import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component') },
  {
    path: 'movies',
    loadComponent: () => import('./pages/movies/movies.component'),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/movie-details/movie-details.component'),
      },
    ],
  },
  {
    path: 'actors',
    loadComponent: () => import('./pages/actors/actors.component'),
    children: [
      {
        path: ':id',
        children: [
            { path: '', loadComponent: () => import('./pages/actor-details/actor-details.component') },
            { path: 'movies', loadComponent: () => import('./pages/actor-movies/actor-movies.component') },
        ]
      },
    ],
  },
];
