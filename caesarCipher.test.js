import caeserCipher from "./functions/caesarCipher";

describe("caeserCipher", () => {
    test("Lower Case String", () => {
        expect(caeserCipher("abc")).toBe("bcd");
    });

    it("Upper Case String", () => {
        expect(caeserCipher("ABC")).toBe("BCD");
    });

    it("Mix characters String", () => {
        expect(caeserCipher("a1ab#bc c")).toBe("b1bc#cd d");
    });

    it("Not a string", () => {
        expect(caeserCipher(1)).toBe("not a string");
    });
});