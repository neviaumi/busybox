const keyTraversals = require('./key-traversals');

describe('keyTraversals', () => {
  it('sorts object keys in descending case sensitive order', () => {
    expect(
      keyTraversals.desc({
        A: 'value',
        B: 'value',
        C: 'value',
        a: 'value',
        b: 'value',
        c: 'value',
      }),
    ).toEqual(['c', 'b', 'a', 'C', 'B', 'A']);
  });
});
