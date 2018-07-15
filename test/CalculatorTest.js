const {expect} = require('chai')
const Calculator = require('../src/Calculator')


describe('Calculator tests', () => {
    it('Empty string should return 0', () => {
        const emptyString = ""
        const result = Calculator.add(emptyString)

        expect(result).to.equal(0)
    })

    it('A single number should return the given number', () => {
        const number = 12
        const result = Calculator.add(number)

        expect(result).to.equal(12)
    })

    it('A string number should return the given number', () => {
        const number = "12"
        const result = Calculator.add(number)

        expect(result).to.equal(12)
    })

    it('Two number should be sum each other', () => {
        const number = "1,2"
        const result = Calculator.add(number)

        expect(result).to.equal(3)
    })
})
