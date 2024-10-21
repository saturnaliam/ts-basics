import { addPositive } from "../src/main";

test('addPositive (test 1)', () => {
    expect(addPositive(1, 2, 3)).toBe(6);
});

test('addPositive (test 2)', () => {
    expect(addPositive(0, 2, 3)).toBe(5);
});

test('addPositive (test 3)', () => {
    expect(addPositive(1, -2, 3)).toBe(4);
});

test('addPositive (test 4)', () => {
    expect(addPositive(0, 0, -3)).toBe(0);
});

test('addPositive (test 5)', () => {
    expect(addPositive(-1, 1, 2)).toBe(3);
});