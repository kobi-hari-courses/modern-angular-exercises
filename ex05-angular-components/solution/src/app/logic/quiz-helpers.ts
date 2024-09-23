import { Answer } from "../models/answer.model";
import { Question } from "../models/question.model";

export function getAnswerEntities(questions: Question[], userAnswers: number[]): Answer[] {
    return userAnswers.map<Answer>((ans, index) => ({
        userAnswer: ans, 
        isCorrect: questions[index].correctAnswerIndex === ans
    }))  
}

export function getRatio(value: number, total: number): number {
    if (value <= 0) return 0;
    if (value >= total) return 1;

    if (total <= 0) return 0;
    return value / total;
}

