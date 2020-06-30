export function compare(participant, completion) {
  for (let i = 0; i <= participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

export function solution(participant, completion) {
  return compare(participant.sort(), completion.sort());
}
