import { Question } from "../models/question.model";

export const ALL_QUESTIONS: Question[] = [
    {
        caption: 'What do you get when you add Red to Green and Blue?', 
        answers: ['Black', 'Gray', 'White', 'Brown'], 
        correctAnswerIndex: 2
    }, 
    {
        caption: 'What do you get when you add Red to Black?', 
        answers: ['Dark Red', 'Red', 'Black', 'Gray'], 
        correctAnswerIndex: 1
    }, 
    {
        caption: 'What do you get when you add Blue to Red?', 
        answers: ['Magenta', 'Cyan', 'Purple', 'White'], 
        correctAnswerIndex: 0
    }, 
    {
        caption: 'What do you get when you add Blue to Green?', 
        answers: ['Magenta', 'Cyan', 'White', 'Teal'], 
        correctAnswerIndex: 1
    }, 
    {
        caption: 'What do you get when you add Red to Green?', 
        answers: ['Brown', 'White', 'Orange', 'Yellow'], 
        correctAnswerIndex: 3
    }, 
    {
        caption: 'What do you get when you add Red to Cyan?', 
        answers: ['Magenta', 'Blue', 'White', 'Purple'], 
        correctAnswerIndex: 2
    }, 
    {
        caption: 'What do you get when you add Yellow to Blue?', 
        answers: ['Green', 'Cyan', 'White', 'Lime'], 
        correctAnswerIndex: 2
    }, 
    {
        caption: 'What do you get when you add Green to Magenta?', 
        answers: ['Brown', 'Yellow', 'White', 'Orange'], 
        correctAnswerIndex: 2
    }, 
    {
        caption: 'What do you get when you add 30% Green to 30% Blue and 30% Red?', 
        answers: ['Black', '30% Gray', '90% Gray', 'White'], 
        correctAnswerIndex: 1
    }, 
    {
        caption: 'What do you need to do, to get from Yellow to Green?', 
        answers: ['Add Green', 'Subtract Red', 'Add Blue', 'Nothing'], 
        correctAnswerIndex: 1
    }
]