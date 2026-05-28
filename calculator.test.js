import calculator from "./calculator";

test('addition', () => {
    const calc = new calculator()
    expect(calc.sum(1, 2)).toBe(3);

})