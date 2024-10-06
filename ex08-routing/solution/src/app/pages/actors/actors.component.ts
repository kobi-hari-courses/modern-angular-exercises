import { Component, inject } from '@angular/core';
import { ActorsStore } from './store/actors.store';
import { BusyComponent } from '../../components/busy/busy.component';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [BusyComponent],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss', 
  providers: [ActorsStore]
})
export default class ActorsComponent {
  readonly store = inject(ActorsStore);

}
