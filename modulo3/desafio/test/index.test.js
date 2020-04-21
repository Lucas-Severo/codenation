const chai = require('chai');
const assert = chai.assert;

const { fibonacci, isFibonacci } = require('../src');

describe('It check the fibonacci function', function(){

    it('Check if the last number of the array is 377', () => {
        const numbers = fibonacci();
        assert.equal(numbers[numbers.length-1], 377);
    });

    it('Check that the previous number of 5 is 3', () => {
        const numbers = fibonacci();
        const index = numbers.indexOf(5);
        assert.equal(numbers[index-1], 3);
    });
});

describe('It check the isFibonacci function', function() {
    it('Check if the 0 is in fibonacci sequence', () => {
        assert.equal(isFibonacci(0), true);
    });

    it('Check if the 25 is in the fibonacci sequence', () => {
        assert.equal(isFibonacci(25), false);
    });

    it('Check if the 144 is in the fibonacci sequence', () => {
        assert.equal(isFibonacci(144), true);
    });

    it('Check if the 320 is in the fibonacci sequence', () => {
        assert.equal(isFibonacci(320), false);
    });

    it('Check if the 377 is in the fibonacci sequence', () => {
        assert.equal(isFibonacci(377), true);
    });
});
