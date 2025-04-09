import { capitalize, reverseString, calculator, caesarCipher } from './index';

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

describe("Caesar's cipher", () => {
  it('works with an empty string', () => {
    expect(caesarCipher('', 5)).toBe('');
  });

  describe('One letter', () => {
    it('returns a letter provided shift times farther in the English alphabet than the provided letter', () => {
      expect(caesarCipher('a', 5)).toBe('f');
      expect(caesarCipher('c', 9)).toBe('l');
    });
    it('accepts uppercase', () => {
      expect(caesarCipher('A', 5)).toBe('F');
      expect(caesarCipher('C', 9)).toBe('L');
    });
    it('wraps when the shift goes beyond the length of the alphabet', () => {
      expect(caesarCipher('a', 28)).toBe('c');
      expect(caesarCipher('A', 28)).toBe('C');
    });
  });

  describe('Random amount of letters', () => {
    it('works for three random letters', () => {
      expect(caesarCipher('aBC', 5)).toBe('fGH');
      expect(caesarCipher('jhU', 10)).toBe('trE');
    });

    it('works for 14 random letters', () => {
      expect(caesarCipher('tesTyfEstyBems', 47)).toBe('oznOtaZnotWzhn');
    });
    it('works for 28 random letters', () => {
      expect(caesarCipher('sadfasSAFAFasdzfqwerpFDSlafd', 0)).toBe(
        'sadfasSAFAFasdzfqwerpFDSlafd',
      );
      expect(caesarCipher('sadfasSAFAFasdzfqwerpFDSlafd', 1)).toBe(
        'tbegbtTBGBGbteagrxfsqGETmbge',
      );
    });
  });

  describe('Text', () => {
    it("whatever isn't an English letter is returned as is", () => {
      expect(
        caesarCipher(
          "it('returns a letter provided shift times farther in the English alphabet than the provided letter', () => {\nexpect(caesarCipher('a', 5)).toBe('f');\nexpect(caesarCipher('c', 9)).toBe('l');\n});",
          2,
        ),
      ).toBe(
        "kv('tgvwtpu c ngvvgt rtqxkfgf ujkhv vkogu hctvjgt kp vjg Gpinkuj cnrjcdgv vjcp vjg rtqxkfgf ngvvgt', () => {\ngzrgev(ecguctEkrjgt('c', 5)).vqDg('h');\ngzrgev(ecguctEkrjgt('e', 9)).vqDg('n');\n});",
      );
    });
  });

  it('throws if the first argument is not a string', () => {
    expect(() => caesarCipher(null, 5)).toThrow();
    expect(() => caesarCipher(undefined, 5)).toThrow();
    expect(() => caesarCipher(true, 5)).toThrow();
    expect(() => caesarCipher(9007199254740991n, 5)).toThrow();
    expect(() => caesarCipher(Symbol('a'), 5)).toThrow();
    expect(() => caesarCipher({ property: 'property' }, 5)).toThrow();
    expect(() => caesarCipher([1, 2])).toThrow();
    expect(() => caesarCipher(new Map({ key: 'value' }))).toThrow();
    expect(() => caesarCipher(new Set([1, 2]))).toThrow();
  });

  it('throws if the second argument is not an integer', () => {
    expect(() => caesarCipher('a', null)).toThrow();
    expect(() => caesarCipher('a', undefined)).toThrow();
    expect(() => caesarCipher('a', false)).toThrow();
    expect(() => caesarCipher('a', 9007199254740991n)).toThrow();
    expect(() => caesarCipher('a', Symbol(5))).toThrow();
    expect(() => caesarCipher('a', { 1: '5' })).toThrow();
    expect(() => caesarCipher('a', [1])).toThrow();
    expect(() => caesarCipher('a', new Map({ 1: '1' }))).toThrow();
    expect(() => caesarCipher('a', new Set([1]))).toThrow();
  });
});
