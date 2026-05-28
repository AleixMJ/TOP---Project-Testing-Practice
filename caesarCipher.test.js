import caesarCipher from "./caesarCipher";

test('No key', () => {
    expect(caesarCipher('hello', 0)).toBe('hello');
});

test('Key change', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
});