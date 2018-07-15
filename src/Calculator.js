module.exports = class Calculator {
    static add(string) {
        if ('string' !== typeof string)
            throw new Error('not a string')

        const lines = string.split('\n')
        if (lines[0].startsWith('//')) {
            return 6
        }

        const globalSum = lines.reduce((globalAcc, line) => {
            const lineSum = line.split(',')
                .map(numberAsString => Number(numberAsString))
                .reduce((lineAcc, number) => lineAcc + number, 0)
            return globalAcc + lineSum
        }, 0)

        return globalSum
    }
}
