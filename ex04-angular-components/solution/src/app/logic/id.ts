export function generateNewId(): number {
    return Math.ceil(Math.random() * 100000000) + 1000000;
}