module.exports = class Calculator {
    static add(string) {
        if (string)
            return Number(string)
        else
            return 0
    }
}
