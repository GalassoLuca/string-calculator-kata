const { expect } = require('chai')
const calculator = require('../src/Calculator')


describe('Calculator tests', () => {
    it('Empty string should return 0', () => {
        const emptyString = ""
        const result = calculator(emptyString)

        expect(result).to.equal(0)
    })

    it('A number should throw an error', () => {
        const number = 12

        expect(() => { calculator(number) }).to.throw(/not a string/)
    })

    it('A string number should return the given number', () => {
        const stringNumber = "12"
        const result = calculator(stringNumber)

        expect(result).to.equal(12)
    })

    it('Should sum 3 numbers separated with comma', () => {
        const threeNumbersSeparatedWithComma = "1,2,3"
        const result = calculator(threeNumbersSeparatedWithComma)

        expect(result).to.equal(6)
    })

    it('Should sum two lines of numbers separated with \\n', () => {
        const twoLinesOfNumbersSeparatedWithComma = "1\n2,3"
        const result = calculator(twoLinesOfNumbersSeparatedWithComma)

        expect(result).to.equal(6)
    })

    it('Should generate error if different delimiter is expected but it is not present', () => {
        const stringWithUndefinedDelimiter = "//\n1;2"

        expect(() => { calculator(stringWithUndefinedDelimiter) }).throw(/undefined delimiter/)
    })

    it('Should accept a different delimiter stored at the first line if it starts with //', () => {
        const twoLineWithDifferentDelimiter = "//;\n1;2\n3"
        const result = calculator(twoLineWithDifferentDelimiter)

        expect(result).to.equal(6)
    })

    it('Should throw an error followed by all negative numbers if negative numbers are given', () => {
        const unexpectedNegativeNumbers = "1,-2,3,-5"

        expect(() => { calculator(unexpectedNegativeNumbers) }).throw(/negatives not allowed: -2 -5/)
    })

    it('Numbers bigger than 1000 should be ignored', () => {
        const lineWithHugeNumber = '2,1001'
        const result = calculator(lineWithHugeNumber)

        expect(result).to.equal(2)
    })
})
