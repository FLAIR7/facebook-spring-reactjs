import math from "./math";

const { sum } = math();

test('Somar dois números', () => {
    expect(sum(1, 2)).toBe(3);
})