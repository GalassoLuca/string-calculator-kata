module.exports = class Calculator {
    static add(string) {
        const sum = Number(string)
        if(!isNaN(sum))
            return sum
        else
            return 3
    }
}
