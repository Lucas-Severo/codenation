function add(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

function mult(number1, number2) {
    return number1 * number2;
}

function div(number1, number2) {
    if(number2 === 0)
        return 0;
    return number1 / number2;
}

module.exports = {
    soma: add,
    subtracao: sub,
    multiplicacao: mult,
    divisao: div
}