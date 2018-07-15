const {expect} = require('chai')
const Calculator = require('../src/Calculator')


describe('Calculator tests', () => {
    it('Empty string should be return 0', () => {
        const emptyString = ""
        const result = Calculator.add(emptyString)

        expect(result).to.equal(0)
    })
})
