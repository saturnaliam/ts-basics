import { add } from "../src/main"

test('add (test 1)', () => {
    expect(add(1, 2)).toBe(3);
});

test('add (test 2)', () => {
    expect(add(-1, 2)).toBe(1);
});

test('add (test 3)', () => {
    expect(add(10, 30)).toBe(40);
});

test('add (test 4)', () => {
    expect(add(20, 2)).toBe(22);
});

test('add (test 5)', () => {
    expect(add(0, 0)).toBe(0);
});