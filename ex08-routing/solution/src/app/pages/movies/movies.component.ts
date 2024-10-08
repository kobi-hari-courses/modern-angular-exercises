import { Component, inject } from '@angular/core';
import { MoviesStore } from './store/movies.store';
import { BusyComponent } from "../../components/busy/busy.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [BusyComponent, RouterModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss', 
  providers: [MoviesStore]
})
export default class MoviesComponent {
  readonly store = inject(MoviesStore);
  readonly router = inject(Router);

  goToDetails(id: number) {
    this.router.navigate(['movies', id]);
  }

}
