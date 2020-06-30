import { solution } from "./완주하지 못한 선수";

describe("완주하지 못한 선수", () => {
  it("test1", () => {
    const completion = ["kiki", "eden"];
    const participant = ["leo", "kiki", "eden"];
    expect(solution(participant, completion)).toEqual("leo");
  });
  it("test2", () => {
    const completion = ["marina", "josipa", "nikola", "filipa"];
    const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
    expect(solution(participant, completion)).toEqual("vinko");
  });
  it("test3", () => {
    const completion = ["mislav", "stanko", "ana"];
    const participant = ["mislav", "stanko", "mislav", "ana"];
    expect(solution(participant, completion)).toEqual("mislav");
  });
  it("test4", () => {
    const completion = [
      "kiki",
      "eden",
      "mislav",
      "stanko",
      "ana",
      "marina",
      "josipa",
      "nikola",
      "filipa",
    ];
    const participant = [
      "human",
      "kiki",
      "eden",
      "mislav",
      "stanko",
      "ana",
      "marina",
      "josipa",
      "nikola",
      "filipa",
    ];
    expect(solution(participant, completion)).toEqual("human");
  });
});
