import { solution, findUnmatchedPlayer } from './완주하지 못한 선수';

describe('완주하지 못한 선수 test', () => {
  test('solution test case 1', () => {
    const participant = ['leo', 'kiki', 'eden'];
    const completion = ['eden', 'kiki'];
    const result = 'leo';
    expect(solution(participant, completion)).toBe(result);
  });
  test('solution test case 2', () => {
    const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
    const completion = ['josipa', 'filipa', 'marina', 'nikola'];
    const result = 'vinko';
    expect(solution(participant, completion)).toBe(result);
  });
  test('solution test case 3', () => {
    const participant = ['mislav', 'stanko', 'mislav', 'ana'];
    const completion = ['stanko', 'ana', 'mislav'];
    const result = 'mislav';
    expect(solution(participant, completion)).toBe(result);
  });

  test('solution test findUnmatchedPlayer success', () => {
    const participant = ['stanko', 'ana', 'mislav', 'mislav'];
    const completion = ['stanko', 'ana', 'mislav'];
    const result = 'mislav';
    expect(solution(participant, completion)).toBe(result);
  });
});
