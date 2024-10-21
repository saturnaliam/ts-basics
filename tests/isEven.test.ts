import { isEven } from "../src/main";

test('isEven (test 1)', () => {
    expect(isEven(1)).toBe(false);
});

test('isEven (test 2)', () => {
    expect(isEven(2)).toBe(true);
});

test('isEven (test 3)', () => {
    expect(isEven(3)).toBe(false);
});

test('isEven (test 4)', () => {
    expect(isEven(4)).toBe(true);
});

test('isEven (test 5)', () => {
    expect(isEven(5)).toBe(false);
});