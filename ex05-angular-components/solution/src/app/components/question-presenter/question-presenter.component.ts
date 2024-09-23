import { Component, input, output } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-presenter',
  standalone: true,
  imports: [],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.scss'
})
export class QuestionPresenterComponent {
  readonly question = input.required<Question>();

  readonly userAnswer = output<number>();

  answerQuestion(answer: number) {
    this.userAnswer.emit(answer);
  }


}
