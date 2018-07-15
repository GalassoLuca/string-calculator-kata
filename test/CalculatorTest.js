const {expect} = require('chai')
const Calculator = require('../src/Calculator')


describe('Calculator tests', () => {
    it('Empty string should be return 0', () => {
        const emptyString = ""
        const result = Calculator.add(emptyString)

        expect(result).to.equal(0)
    })

    it('For a single number should return the given number', () => {
        const number = 12
        const result = Calculator.add(number)

        expect(result).to.equal(12)
    })

    it('For a single string number should be return the given number', () => {
        const number = "12"
        const result = Calculator.add(number)

        expect(result).to.equal(12)
    })
})
