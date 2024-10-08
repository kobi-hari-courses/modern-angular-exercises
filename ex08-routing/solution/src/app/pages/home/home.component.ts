import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  readonly counterService = inject(CounterService);

}
