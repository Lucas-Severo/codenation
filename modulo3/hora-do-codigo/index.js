const calculator = require('./calc');
const prompt = require('prompt-sync')();

function options() {
    console.log(`
    1 - Add
    2 - Subtract
    3 - Multiply
    4 - Divide
    0 - Exit
    `)
}

function optionSelected(option) {
    const number1 = Number(prompt('First number: '));
    const number2 = Number(prompt('Second number: '));

    switch(option) {
        case 1:
            return calculator.add(number1, number2);
        case 2:
            return calculator.sub(number1, number2);
        case 3:
            return calculator.mult(number1, number2);
        case 4:
            return calculator.div(number1, number2);
    }
}

while(true) {
    options();
    const option = Number(prompt('What is the option? '));
    
    if(option === 0) {
        break;
    } else if (option < 0 || option > 4) {
        console.log('unknown option');
    } else {
        const result = optionSelected(option);
        console.log(`Result: ${result}`);
    }
}

