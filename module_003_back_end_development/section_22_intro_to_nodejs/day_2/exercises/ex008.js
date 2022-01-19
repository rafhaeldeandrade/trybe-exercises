const fizzBuzz = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 3 === 0 && num % 5 === 0) return resolve('FizzBuzz');
    if (num % 3 === 0 && num % 5 !== 0) return resolve('Fizz');
    if (num % 3 !== 0 && num % 5 === 0) return resolve('Buzz');
    return reject(num);
  })
}

module.exports = fizzBuzz;
