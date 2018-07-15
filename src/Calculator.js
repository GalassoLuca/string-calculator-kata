module.exports = class Calculator {
    static add(string, delimiter = ',') {
        if ('string' !== typeof string)
            throw new Error('not a string')

        const lines = string.split('\n')
        if (lines[0].startsWith('//')) {
            if(!lines[0].charAt(2))
                throw new Error('undefined delimiter')

            delimiter = lines[0].charAt(2)
            lines.shift()
        }

        const globalSum = lines.reduce((globalAcc, line) => {
            const lineSum = line.split(delimiter)
                .map(numberAsString => {
                    const number = Number(numberAsString)
                    if(number < 0)
                        throw Error('negatives not allowed: -1')
                    return number
                })
                .reduce((lineAcc, number) => lineAcc + number, 0)
            return globalAcc + lineSum
        }, 0)

        return globalSum
    }
}
