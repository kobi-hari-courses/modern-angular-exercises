import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Guess } from './models/guess.model';
import { addGuess, calcGameState, getLatestGuess } from './logic/model-helpers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly computerGuess = signal(0);
  readonly userGuesses = signal<Guess[]>([])

  readonly gameState = computed(() => calcGameState(this.userGuesses()));
  readonly latestGuess = computed(() => getLatestGuess(this.userGuesses()));

  restartGame() {
    const randomNum = Math.ceil(Math.random() * 100);
    this.computerGuess.set(randomNum);
    this.userGuesses.set([]);
  }

  addGuess(value: number) {
    this.userGuesses.update(guesses => addGuess(this.computerGuess(), guesses, value));
  }

  constructor() {
    this.restartGame();
  }

}
