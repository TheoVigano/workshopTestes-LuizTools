const index = require("./index")

describe("Testes do Index", () => {
    test("aplicarDesconto(10,5)", () => {
        const valor = 10;
        const desconto = 5;
        const resultadoEsperado = 5;
        const resultado = index.aplicarDesconto(valor, desconto);
        expect(resultado == resultadoEsperado);

    })

    test("aplicarDesconto(10,15)", () => {
        const valor = 10;
        const desconto = 15;
        const resultadoEsperado = 0;
        const resultado = index.aplicarDesconto(valor, desconto)/
        expect ( resultado === resultadoEsperado);
    })
})