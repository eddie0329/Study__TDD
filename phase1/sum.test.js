import toBeType from "jest-tobetype";
import { sum } from "./sum";

expect.extend(toBeType);

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  // jest chain example
  expect([1, 2, 3]).toHaveLength(3).toEqual([1, 2, 3]);
  // jest expect message example
  expect(sum(1, 2), "this should be 3").toBe(3);
});

// jest-tobetype example
describe("type test", () => {
  it("string test", () => {
    expect("").toBeType("string");
  });
  it("number test", () => {
    expect(1).toBeType("number");
  });
  it("object test", () => {
    expect({}).toBeType("object");
  });
  it("array test", () => {
    expect([]).toBeType("array");
  });
  it("function test", () => {
    expect(() => {}).toBeType("function");
  });
});
