import { solution } from "./JadenCase";

describe("Jaden Case", () => {
  it("solution test", () => {
    expect(solution("3people unFollowed me")).toEqual("3people Unfollowed Me");
    expect(solution("for the last week")).toEqual("For The Last Week");
    expect(solution("hello World ")).toEqual("Hello World ");
  });
});
