import calculator from "./calculator";

let calc;

beforeEach(() => {
    calc = new calculator;
})

test('addition', () => {
    expect(calc.add(1, 2)).toBe(3);

})

test('subtraction', () => {
    expect(calc.subtract(4, 3)).toBe(1)

});
    
test('division', () => {
    expect(calc.divide(10,3)).toBe(3)
});

test('multiplication', () => {
    expect(calc.multiply(5,3)).toBe(15)
});