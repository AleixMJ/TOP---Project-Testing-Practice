import caesarCipher from "./caesarCipher";

test('No key', () => {
    expect(caesarCipher('hello', 0)).toBe('hello');
});

test('Key change', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
});

test('symbols', () => {
    expect(caesarCipher(' /.(', 5)).toBe(' /.(')
})

test('everything together', () =>
    expect(caesarCipher('HeLLo, World!', 3)).toBe('KhOOr, Zruog!')
)