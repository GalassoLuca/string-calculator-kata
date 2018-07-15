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

        expect(() => { Calculator.add(number) }).to.throw(/not a string/)
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

        expect(result).to.equal(6)
    })

    it('Should generate error if different delimiter is expected but it is not present', () => {
        const stringWithUndefinedDelimiter = "//\n1;2"

        expect(() => { Calculator.add(stringWithUndefinedDelimiter) }).throw(/undefined delimiter/)
    })

    it('Should accept different delimiter', () => {
        const singleLineWithDifferentDelimiter = "//;\n1;2"
        const result = Calculator.add(singleLineWithDifferentDelimiter)

        expect(result).to.equal(3)
    })

    it('Should accept different delimiter on multi line', () => {
        const twoLineWithDifferentDelimiter = "//;\n1;2\n3"
        const result = Calculator.add(twoLineWithDifferentDelimiter)

        expect(result).to.equal(6)
    })

    it('Should throw an error if negative number is given', () => {
        const unexpectedNegativeNumber = "1,4,-1"

        expect(() => { Calculator.add(unexpectedNegativeNumber) }).throw(/negatives not allowed: -1/)
    })

    it('Should throw an error followed by all negative numbers if negative numbers are given', () => {
        const unexpectedNegativeNumber = "//;\n1;-2\n3;-5"

        expect(() => { Calculator.add(unexpectedNegativeNumber) }).throw(/negatives not allowed: -2 -5/)
    })
})
