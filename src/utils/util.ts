export function generateRandomDelay(): number {
  return Math.floor(Math.random() * 4 + 2) * 1000;
}
