import { Component, inject, input } from '@angular/core';
import { BusyComponent } from "../../components/busy/busy.component";
import { ActorDetailsStore } from './store/actor-details.store';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [BusyComponent],
  templateUrl: './actor-details.component.html',
  styleUrl: './actor-details.component.scss', 
  providers: [ActorDetailsStore]
})
export default class ActorDetailsComponent {
  readonly id = input.required<number>();
  readonly store = inject(ActorDetailsStore);

  constructor() {
    this.store.reload(this.id);

  }

}
