import { Answer } from "../models/answer.model";
import { Question } from "../models/question.model";

export function getAnswerEntities(questions: Question[], userAnswers: number[]): Answer[] {
    return userAnswers.map<Answer>((ans, index) => ({
        userAnswer: ans, 
        isCorrect: questions[index].correctAnswerIndex === ans
    }))  
}

