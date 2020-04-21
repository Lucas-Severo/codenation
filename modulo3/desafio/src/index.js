'use strict'

const fibonacci = () => {
    const numbers = [0, 1];

    while(numbers[numbers.length-1] < 350) {
        numbers.push(numbers[numbers.length-1] + numbers[numbers.length-2]);
    }
    return numbers;
}

const isFibonacci = (num) => {
    return fibonacci().includes(num);
}

module.exports = {
    fibonacci,
    isFibonacci
}