import { sum } from '../';

describe('sum()', () => {
  it('should return the sum of two numbers', () => {
    let actual = sum(1, 2);
    expect(actual).toBe(3);
  });
});
