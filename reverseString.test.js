import reverseString from "./reverseString";

test('texted reversed', () => {
    expect(reverseString("Hola")).toBe("aloH");
})

test('empty', () => {
    expect(reverseString("")).toBe("");
})