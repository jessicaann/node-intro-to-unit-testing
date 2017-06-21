const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case for primes
  it('should return strings for prime numbers', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 30, expected: 'fizz-buzz'},
      {num: 10, expected: 'buzz'},
      {num: 27, expected: 'fizz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });
  //test the case for non-primes
  it('should return number if not a prime', function() {

    const normalCases = [
      {num: 26, expected: 26},
      {num: 3242, expected: 3242},
      {num: -14, expected: -14}
    ];
   
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });
  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      'a',
      true,
      {'test': 1}
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});