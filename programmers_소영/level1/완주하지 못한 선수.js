export function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.find((player, i) => completion[i] != player);
}