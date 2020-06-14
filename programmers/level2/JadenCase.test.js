import { solution } from "./JadenCase";

describe("Jaden Case", () => {
  it("solution test", () => {
    expect(solution("3people unFollowed me")).toEqual("3 people Unfollowed Me");
    expect(solution("for the last week")).toEqual("For The Last Week");
  });
});
