export function capitalize(string) {
  return string.replace(string.at(0), string.at(0).toUpperCase());
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export const calculator = {
  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('Input must be two numbers!');
    return a - b;
  },
  divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('Input must be two numbers!');
    return a / b;
  },
  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('Input must be two numbers!');
    return a * b;
  },
};

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export function caesarCipher(string, shift) {
  if (typeof string !== 'string')
    throw new Error('The first argument must be a string!');
  if (!Number.isInteger(shift))
    throw new Error('the second argument must be an integer!');
  const letters = string.split('');
  let output = '';
  letters.forEach((letter) => {
    if (!alphabet.includes(letter.toLowerCase())) {
      output += letter;
      return;
    }
    if (letter === letter.toLowerCase()) {
      output += alphabet.at(((alphabet.indexOf(letter) + 1 + shift) % 26) - 1);
    } else {
      output += alphabet
        .at(((alphabet.indexOf(letter.toLowerCase()) + 1 + shift) % 26) - 1)
        .toUpperCase();
    }
  });
  return output;
}

export function analyzeArray(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array!');
  arr.forEach((item) => {
    if (typeof item !== 'number')
      throw new Error('Input must be an array of numbers only!');
  });

  return {
    average: Number(
      (arr.reduce((sum, num) => sum + num, 0) / arr.length).toFixed(2),
    ),
    min: arr.sort((a, b) => a - b)[0],
    max: arr.sort((a, b) => b - a)[0],
    length: arr.length,
  };
}
