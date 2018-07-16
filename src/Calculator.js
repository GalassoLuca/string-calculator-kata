module.exports = class Calculator {
    static add(string) {
        if ('string' !== typeof string)
            throw new Error('not a string')

        const lines = string.split('\n')
        let delimiter = ','

        // check if exist an alternative delimiter
        if (lines[0].startsWith('//')) {
            if (!lines[0].charAt(2))
                throw new Error('undefined delimiter')

            delimiter = lines[0].charAt(2)
            lines.shift()
        }

        const negativeNumbers = []
        const acceptedNumbers = []

        // find and store all numbers
        lines.forEach((line) => {
            line.split(delimiter)
                .forEach(numberAsString => {
                    const number = Number(numberAsString)
                    if (number < 0)
                        negativeNumbers.push(number)
                    else if (number <= 1000)
                        acceptedNumbers.push(number)
                })
        })

        if (negativeNumbers.length > 0)
            throw Error(`negatives not allowed: ${negativeNumbers.join(' ')}`)

        const globalSum = acceptedNumbers.reduce((acc, number) => acc + number, 0)
        return globalSum
    }
}
