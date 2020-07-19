/**
 * {array} priorities
 * {number} location
 */
export const solution = (priorities, location) => {
  let answer = 0;
  const ADJUSTMENT_FOR_LOCATION = 1;

  const refinedPriorities = priorities.reduce((a, c, index) => {
    const temp = {};
    temp["priority"] = c;
    temp["index"] = index;
    a.push(temp);
    return a;
  }, []);

  while (true) {
    const MAX = Math.max(...refinedPriorities.map((p) => p.priority));
    // IF MAX
    if (refinedPriorities[0].priority === MAX) {
      // IF TARGET VALUE
      if (location === refinedPriorities[0].index) {
        break;
      } else {
        answer += 1;
        refinedPriorities.shift();
      }
    } else {
      // IF NOT MAX
      refinedPriorities.push(refinedPriorities.shift());
    }
  }
  return answer + ADJUSTMENT_FOR_LOCATION;
};
