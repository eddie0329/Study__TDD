export function solution(participant, completion) {
  for (let i = 0; i <= participant.length; i++) {
    if (!completion.includes(participant[i])) {
      return participant[i];
    }
  }
}
