module.exports = class Calculator {
    static add(string) {
        const numbers = string
            .split(',')
            .map(numberAsString => Number(numberAsString))
        const sum = numbers.reduce((number, acc) => acc + number, 0)
        return sum
    }
}
