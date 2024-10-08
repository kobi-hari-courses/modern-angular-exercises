import { Component, inject } from '@angular/core';
import { ActorsStore } from './store/actors.store';
import { BusyComponent } from '../../components/busy/busy.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [BusyComponent, RouterModule],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss', 
  providers: [ActorsStore]
})
export default class ActorsComponent {
  readonly store = inject(ActorsStore);
  readonly router = inject(Router);

  goToDetails(id: number) {
    this.router.navigate(['actors', id]);
  }

}
