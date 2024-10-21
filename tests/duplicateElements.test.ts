import { duplicateElements } from "../src/main";

test('duplicateElements (test 1)', () => {
    expect(duplicateElements([1])).toStrictEqual([1, 1]);
});

test('duplicateElements (test 2)', () => {
    expect(duplicateElements([1, 2])).toStrictEqual([1, 1, 2, 2]);
});

test('duplicateElements (test 3)', () => {
    expect(duplicateElements([1, 2, 3])).toStrictEqual([1, 1, 2, 2, 3, 3]);
});

test('duplicateElements (test 4)', () => {
    expect(duplicateElements([1, 1, 1])).toStrictEqual([1, 1, 1, 1, 1, 1]);
});

test('duplicateElements (test 5)', () => {
    expect(duplicateElements([0, 5, 10, 15])).toStrictEqual([0, 0, 5, 5, 10, 10, 15, 15]);
});