const { expect } = require('chai')
const Calculator = require('../src/Calculator')


describe('Calculator tests', () => {
    it('Empty string should return 0', () => {
        const emptyString = ""
        const result = Calculator.add(emptyString)

        expect(result).to.equal(0)
    })

    it('A number should throw an error', () => {
        const number = 12

        // expect(result).to.equal(12)
        expect((number) => { Calculator.add(number) }).throw(/not a string/)
    })

    it('A string number should return the given number', () => {
        const stringNumber = "12"
        const result = Calculator.add(stringNumber)

        expect(result).to.equal(12)
    })

    it('Two numbers should sum each other', () => {
        const twoNumbersSeparatedWithComma = "1,2"
        const result = Calculator.add(twoNumbersSeparatedWithComma)

        expect(result).to.equal(3)
    })

    it('The function should sum 3 numbers separated with comma', () => {
        const threeNumbersSeparatedWithComma = "1,2,3"
        const result = Calculator.add(threeNumbersSeparatedWithComma)

        expect(result).to.equal(6)
    })

    it('Should sum two lines of numbers separated with \\n', () => {
        const twoLinesOfNumbersSeparatedWithComma = "1\n2,3"
        const result = Calculator.add(twoLinesOfNumbersSeparatedWithComma)

        expect(result).to.equal(2)
    })
})
