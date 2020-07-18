/**
 * {array} priorities
 * {number} location
 */
export const solution = (priorties, location) => {
  const stack = [];
  const ADJUSTMENT_FOR_PRIORITY_VALUE = 1;
  priorties.forEach((priority, index) => {
    const temp = { priority, index };
    stack.push(temp);
  });
  stack.sort((a, b) => {
    return a.priority - b.priority;
  });
  stack.reverse();
  return (
    stack.findIndex((priorty) => {
      if (priorty.index === location) {
        return true;
      }
    }) + ADJUSTMENT_FOR_PRIORITY_VALUE
  );
};
