import { GuessResult } from "./guess-result.model";

export interface Guess {
    readonly value: number;
    readonly result: GuessResult;
}