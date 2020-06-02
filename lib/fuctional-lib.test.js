import { map, filter, reduce, go } from "./functional-lib";

describe("funtional lib test", () => {
  it("map test", () => {
    const add2 = (num) => num + 2;
    expect(map(add2, [1, 2, 3])).toEqual([3, 4, 5]);
    const double = (num) => num * 2;
    expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
    const triple = (num) => num * 3;
    expect(map(triple, [1, 2, 3])).toEqual([3, 6, 9]);
  });

  it("filter test", () => {
    const getOdd = (num) => num % 2;
    expect(filter(getOdd, [1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    const getEven = (num) => !(num % 2);
    expect(filter(getEven, [1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("reduce test", () => {
    const add = (a, b) => a + b;
    expect(reduce(add, 0, [1, 2, 3, 4])).toBe(10);
    expect(reduce(add, [1, 2, 3, 4])).toBe(10);
  });

  it("complex lib test", () => {
    const products = [
      { name: "a", price: 1 },
      { name: "b", price: 2 },
      { name: "c", price: 3 },
      { name: "d", price: 4 },
      { name: "e", price: 5 },
      { name: "f", price: 6 },
    ];
    const getPrice = (product) => product.price;
    const getLessEqualThan3 = (price) => price <= 3;
    const add = (a, b) => a + b;
    const prices = map(getPrice, products);
    expect(prices).toEqual([1, 2, 3, 4, 5, 6]);
    const filteredPrices = filter(getLessEqualThan3, prices);
    expect(filteredPrices).toEqual([1, 2, 3]);
    const addAllPrices = reduce(add, filteredPrices);
    expect(addAllPrices).toEqual(6);
    const combined = reduce(
      add,
      filter(getLessEqualThan3, map(getPrice, products))
    );
    expect(combined).toBe(6);
  });

  it("go test", () => {
    const result1 = go(
      0,
      (a) => a + 1,
      (a) => a + 10,
      (a) => a + 100
    );
    expect(result1).toBe(111);

    const products = [
      { name: "a", price: 1 },
      { name: "b", price: 2 },
      { name: "c", price: 3 },
      { name: "d", price: 4 },
      { name: "e", price: 5 },
      { name: "f", price: 6 },
    ];

    const getPrice = (product) => product.price;
    const getLessEqualThan3 = (price) => price <= 3;
    const add = (a, b) => a + b;

    const result2 = go(
      products,
      map(getPrice),
      filter(getLessEqualThan3),
      reduce(add)
    );
    expect(result2).toBe(6);
  });

  it("pipe test", () => {});
});
