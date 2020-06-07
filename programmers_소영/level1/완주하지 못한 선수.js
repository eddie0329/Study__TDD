export function solution(participant, completion) {
    const completionObj = completion.reduce((obj, player) => {
        obj[player] = obj[player] ? obj[player] + 1 : 1;
        return obj;
    }, {});
    return participant.find(player => {
        if(completionObj[player])
            completionObj[player] = completionObj[player]-1;
        else 
            return true;
    });
}