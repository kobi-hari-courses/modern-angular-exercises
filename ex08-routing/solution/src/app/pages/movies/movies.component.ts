import { Component, inject } from '@angular/core';
import { MoviesStore } from './store/movies.store';
import { BusyComponent } from "../../components/busy/busy.component";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [BusyComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss', 
  providers: [MoviesStore]
})
export default class MoviesComponent {
  readonly store = inject(MoviesStore);

}
