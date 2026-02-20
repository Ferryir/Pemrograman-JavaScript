import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    assert.strictEqual(sum(1, 2), 3);
  });

  it('should return 0 when both arguments are 0', () => {
    assert.strictEqual(sum(0, 0), 0);
  });

  it('should return the correct sum for large numbers', () => {
    assert.strictEqual(sum(100, 200), 300);
  });
});
