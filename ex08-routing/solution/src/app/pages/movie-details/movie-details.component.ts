import { Component, inject, input } from '@angular/core';
import { MovieDetailsStore } from './store/movie-details.store';
import { BusyComponent } from "../../components/busy/busy.component";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [BusyComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss', 
  providers: [MovieDetailsStore]
})
export default class MovieDetailsComponent {
  readonly id = input.required<number>();
  readonly store = inject(MovieDetailsStore);

  constructor() {
    this.store.reload(this.id);

  }

}
