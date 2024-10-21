import { sumArray } from "../src/main";

test('sumArray (test 1)', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
});

test('sumArray (test 2)', () => {
    expect(sumArray([-1, 1, 2])).toBe(2);
});

test('sumArray (test 3)', () => {
    expect(sumArray([0, 0, 0])).toBe(0);
});

test('sumArray (test 4)', () => {
    expect(sumArray([5, 4, 3])).toBe(12);
});

test('sumArray (test 5)', () => {
    expect(sumArray([10, 10, 10])).toBe(30);
});