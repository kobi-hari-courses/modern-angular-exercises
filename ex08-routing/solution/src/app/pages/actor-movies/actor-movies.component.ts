import { Component, inject, input } from '@angular/core';
import { ActorMoviesStore } from './store/actor-movies.store';
import { BusyComponent } from '../../components/busy/busy.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-actor-movies',
  standalone: true,
  imports: [BusyComponent, RouterModule],
  templateUrl: './actor-movies.component.html',
  styleUrl: './actor-movies.component.scss', 
  providers: [ActorMoviesStore]
})
export default class ActorMoviesComponent {
  readonly store = inject(ActorMoviesStore);
  readonly id = input.required<number>();

  constructor() {
    this.store.reload(this.id);

  }

}
