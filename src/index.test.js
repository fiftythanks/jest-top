import { capitalize, reverseString, calculator } from './index';

describe('capitalize', () => {
  it('returns capitalized input string', () => {
    expect(capitalize('test')).toBe('Test');
  });

  it("throws if input isn't a string", () => {
    expect(() => capitalize(1)).toThrow();
    expect(() => capitalize(true)).toThrow();
    expect(() => capitalize([1, 2])).toThrow();
    expect(() => capitalize({ a: 1, b: 2 })).toThrow();
  });
});

describe('reverseString', () => {
  it('returns reversed input string', () => {
    expect(reverseString('test')).toBe('tset');
  });

  it("throws if input isn't a string", () => {
    expect(() => reverseString(1)).toThrow();
    expect(() => reverseString(true)).toThrow();
    expect(() => reverseString([1, 2])).toThrow();
    expect(() => reverseString({ a: 1, b: 2 })).toThrow();
  });
});

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
describe('calculator', () => {
  describe('subtract', () => {
    it('returns the first number minus the second one', () => {
      expect(calculator.subtract(1, 5)).toBe(-4);
    });
    it("throws if input isn't two numbers", () => {
      expect(() => calculator.subtract(1)).toThrow();
      expect(() => calculator.subtract(true)).toThrow();
      expect(() => calculator.subtract([1, 2])).toThrow();
      expect(() => calculator.subtract({ a: 1, b: 2 })).toThrow();
      expect(() => calculator.subtract('string')).toThrow();
      expect(() => calculator.subtract('string', 'string')).toThrow();
    });
  });
  describe('divide', () => {
    it('returns the first number divided by the second one', () => {
      expect(calculator.divide(10, 5)).toBe(2);
    });
    it("throws if input isn't two numbers", () => {
      expect(() => calculator.divide(1)).toThrow();
      expect(() => calculator.divide(true)).toThrow();
      expect(() => calculator.divide([1, 2])).toThrow();
      expect(() => calculator.divide({ a: 1, b: 2 })).toThrow();
      expect(() => calculator.divide('string')).toThrow();
      expect(() => calculator.divide('string', 'string')).toThrow();
    });
  });
  describe('multiply', () => {
    it('returns the first number times the second one', () => {
      expect(calculator.multiply(10, 5)).toBe(50);
    });
    it("throws if input isn't two numbers", () => {
      expect(() => calculator.multiply(1)).toThrow();
      expect(() => calculator.multiply(true)).toThrow();
      expect(() => calculator.multiply([1, 2])).toThrow();
      expect(() => calculator.multiply({ a: 1, b: 2 })).toThrow();
      expect(() => calculator.multiply('string')).toThrow();
      expect(() => calculator.multiply('string', 'string')).toThrow();
    });
  });
});
