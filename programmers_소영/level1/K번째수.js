export function solution(array, commands) {
  return commands.map(([from, to, k]) => array.slice(from - 1, to).sort((a, b) => a - b)[k - 1]);
}
