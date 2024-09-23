import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ALL_QUESTIONS } from './data/all-questions';
import { getAnswerEntities } from './logic/quiz-helpers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly questions = signal(ALL_QUESTIONS);
  readonly answers = signal<number[]>([]);

  readonly currentQuestionIndex = computed(() => this.answers().length);
  readonly currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()]);
  readonly isQuizDone = computed(() => this.answers().length >= this.questions().length);
  readonly answersEntities = computed(() => getAnswerEntities(this.questions(), this.answers()));
  readonly correctAnswers = computed(() => this.answersEntities().filter(ans => ans.isCorrect));
  readonly correctAnswersCount = computed(() => this.correctAnswers().length);
  readonly correctRatio = computed(() => this.correctAnswersCount() / this.questions().length);
  


  resetQuiz() {
    this.answers.set([]);
  }

  answerCurrentQuestion(userAnswer: number) {
    this.answers.update(answers => [...answers, userAnswer]);
  }


}
