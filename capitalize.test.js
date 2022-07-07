import capitalize from "./capitalize";

describe('string', () => {
    test('single word string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('multiple words string', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    });

    test('ignores-non alphabetic characters', () => {
        expect(capitalize('123dogs!@#')).toBe('123Dogs!@#');    
    });

    test('ignores capitalized Strings', () => {
        expect(capitalize('HELLO')).toBe('HELLO');
    });

    test('message if no alphabatic characters found', () => { 
        expect(capitalize('123')).toBe('non-alphabetic characters found');
    });

});

