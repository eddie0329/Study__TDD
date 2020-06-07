export function solution(participant, completion) {
    const completionObj = completion.reduce((obj, player) => ({ ...obj, [player]: getPlayerCount(obj, player) }), {});
    return findUncompletePlayer(completionObj, participant);
}

export function getPlayerCount(obj, player) {
    if (!obj[player])
        return 1;
    return obj[player] + 1;
}

export function findUncompletePlayer(completionObj, participant) {
    return participant.find(player => {
        if (!completionObj[player]) return true;
        completionObj[player] = completionObj[player] - 1;
    });
}