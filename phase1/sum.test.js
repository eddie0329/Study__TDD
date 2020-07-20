import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect([1, 2, 3]).toHaveLength(3).toEqual([1, 2, 3]);
  expect(sum(1, 2), 'this should be 3').toBe(3);
});
