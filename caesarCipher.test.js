import caesarCipher from "./caesarCipher";

test('No key', () => {
    expect(caesarCipher('hello', 0)).toBe('hello');
}) 