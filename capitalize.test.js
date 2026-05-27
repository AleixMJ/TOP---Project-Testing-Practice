import capitalize from './capitalize.js';

test('first letter uppercase', () => {
    expect(capitalize('hello')).toBe('Hello');
}) 


test('last letter lowercase', () => {
    expect(capitalize('hellO')).toBe('Hello');
}) 