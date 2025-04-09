const sum = require('./index.js');

it('adds 1 + 2 to equal 3', () => {
  expect(sum(5, 2)).toBe(7);
});
