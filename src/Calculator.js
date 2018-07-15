module.exports = class Calculator {
    static add(string) {
        if('string' !== typeof string)
            throw new Error('not a string')

        const numbers = string
            .split(',')
            .map(numberAsString => Number(numberAsString))
        const sum = numbers.reduce((number, acc) => acc + number, 0)
        return sum
    }
}
