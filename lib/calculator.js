function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function (number) {
    return this.total += number;
}

Calculator.prototype.subtract = function (number) {
    return this.total -= number;
}

Calculator.prototype.multiply = function (number) {
    return this.total *= number;
}
Calculator.prototype.divide = function (number) {
    if (number === 0) {
        throw new Error('Can not divide by 0');
    }
    return this.total /= number;
}





 