import reverseString from './functions/reverseString';

describe('reverseString', () => {
    test('single word string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('multiple words string', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('reverse mix characters string', () => {
        expect(reverseString('123Dogs!@# 4rE Gr34t')).toBe('t43rG Er4 #@!sgoD321');
    });

    test('message if not a string', () => {
        expect(reverseString(123)).toBe('not a string');
    });
});
