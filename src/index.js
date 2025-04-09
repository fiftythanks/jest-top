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
