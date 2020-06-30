export function solution(participant, completion) {
  participant.sort();
  completion.sort();
  return findUnmatchedPlayer(participant, completion);
}

function findUnmatchedPlayer(participant, completion) {
  for (let i = 0; i < participant; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
    return null;
  }
}
