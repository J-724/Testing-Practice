import calculator from "./functions/calculator";

describe("sum", () => {
    test('Sum two numbers', () => {
        expect(calculator.sum(1, 2)).toBe(3);
    });

    test('Sum two decimal numbers', () => {
        expect(calculator.sum(1.1, 2.2)).toBeCloseTo(3.3);
    });

    test('Sum two negative numbers', () => {
        expect(calculator.sum(-1, -2)).toBe(-3);
    });

    test('Message if not a number', () => {
        expect(calculator.sum("a", "b")).toBe("Arguments contain a non-number value");
    });
});

describe("subtract", () => { 
    test('Subtract two numbers', () => {
        expect(calculator.subtract(3, 1)).toBe(2);
    });

    test('Subtract negative numbers', () => {
        expect(calculator.subtract(-3, -1)).toBe(-2);
    });

    test('Subtract two decimal numbers', () => {
        expect(calculator.subtract(3.1, 1.1)).toBeCloseTo(2.0);
    });

    test('Message if not a number', () => {
        expect(calculator.subtract("a", "b")).toBe("Arguments contain a non-number value");
    });
});

describe("multiply", () => {
    test('Multiply two numbers', () => {
        expect(calculator.multiply(3, 1)).toBe(3);
    });

    test('Multiply two decimal numbers', () => {
        expect(calculator.multiply(3.1, 1.1)).toBeCloseTo(3.41);
    });

    test('Multiply two negative numbers', () => {
        expect(calculator.multiply(-3, -1)).toBe(3);
    });

    test('Message if not a number', () => {
        expect(calculator.multiply("a", "b")).toBe("Arguments contain a non-number value");
    });
});

describe("divide", () => {
    test('Divide two numbers', () => {
        expect(calculator.divide(3, 1)).toBe(3);
    });

    test('Divide two decimal numbers', () => {
        expect(calculator.divide(3.1, 1.1)).toBeCloseTo(2.8181);
    });

    test('Divide two negative numbers', () => {
        expect(calculator.divide(-3, -1)).toBe(3);
    });

    test('Message if not a number', () => {
        expect(calculator.divide("a", "b")).toBe("Arguments contain a non-number value");
    });
});