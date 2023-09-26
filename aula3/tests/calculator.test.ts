import calculator from "calculator"


describe("Soma", () => {
    it("Soma os valores", () => {
        const resultado = calculator.sum(2, 1);

        expect(resultado).toBe(3);
    })
})

describe("Subtrai", () => {
    it("Subtrai os valores", () => {
        const resultado = calculator.sub(2, 1);

        expect(resultado).toBe(1);
    })
})

describe("Multiplica", () => {
    it("Multiplica os Valores", () => {
        const resultado = calculator.mul(2,2);

        expect(resultado).toBe(4);
    })
})

describe("Divide", () => {
    it("Divide os Valores", () => {
        const resultado = calculator.div(4,2);

        expect(resultado).toBe(2);
    })
})