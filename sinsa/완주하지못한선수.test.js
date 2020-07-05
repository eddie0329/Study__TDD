import { solution } from "./완주하지못한선수";

describe("완주하지 못한 선수 test", () => {
  it("테스트1", () => {
    const test1 = solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
    expect(test1).toEqual("leo");
  });
  it("테스트2", () => {
    const test2 = solution(
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"]
    );
    expect(test2).toEqual("vinko");
  });
  it("테스트3", () => {
    const test3 = solution(
      ["mislav", "stanko", "mislav", "ana"],
      ["stanko", "ana", "mislav"]
    );
    expect(test3).toEqual("mislav");
  });
});
