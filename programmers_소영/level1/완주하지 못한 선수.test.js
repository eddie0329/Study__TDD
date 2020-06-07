import { solution, getPlayerCount, findUncompletePlayer } from './완주하지 못한 선수';

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

  test('getPlayerCount test', () => {
    const obj = { orange: 1, banana: 5 };
    expect(getPlayerCount(obj, 'orange')).toBe(2);
    expect(getPlayerCount(obj, 'kiwi')).toBe(1);
    expect(getPlayerCount(obj, 'banana')).toBe(6);
  });

  test('findUncompletePlayer test1', () => {
    const obj = { orange: 1, banana: 3 };
    const list = ['orange', 'banana', 'kiwi', 'banana', 'banana'];
    expect(findUncompletePlayer(obj, list)).toBe('kiwi');
  });
  test('findUncompletePlayer test2', () => {
    const obj = { orange: 1, banana: 2, kiwi: 1 };
    const list = ['orange', 'banana', 'kiwi', 'banana', 'banana'];
    expect(findUncompletePlayer(obj, list)).toBe('banana');
  })
})