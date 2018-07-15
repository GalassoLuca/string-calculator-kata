module.exports = class Calculator {
    static add(string) {
        if ('string' !== typeof string)
            throw new Error('not a string')

        const lines = string.split('\n')

        const sum = lines.reduce((acc, line) => {
            const lineSum = line.split(',')
                .map(numberAsString => Number(numberAsString))
                .reduce((localAcc, number) => localAcc + number, 0)
            return acc + lineSum
        }, 0)

        return sum
    }
}
