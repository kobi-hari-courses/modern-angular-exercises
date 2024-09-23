export function wordsCount(text: string): number {
  return text
    .trim()
    .split(' ')
    .filter(word => word.length > 0)
    .length;
}