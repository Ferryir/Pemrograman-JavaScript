import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

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

  it('should return 0 when the first argument is negative', () => {
    assert.strictEqual(sum(-1, 2), 0);
  });

  it('should return 0 when the second argument is negative', () => {
    assert.strictEqual(sum(1, -2), 0);
  });

  it('should return 0 when both arguments are negative', () => {
    assert.strictEqual(sum(-1, -2), 0);
  });

  it('should return 0 when the first argument is not a number', () => {
    assert.strictEqual(sum('a', 2), 0);
  });

  it('should return 0 when the second argument is not a number', () => {
    assert.strictEqual(sum(1, 'b'), 0);
  });

  it('should return 0 when both arguments are not numbers', () => {
    assert.strictEqual(sum('a', 'b'), 0);
  });

  it('should return 0 when arguments are null', () => {
    assert.strictEqual(sum(null, null), 0);
  });

  it('should return 0 when arguments are undefined', () => {
    assert.strictEqual(sum(undefined, undefined), 0);
  });

  it('should return 0 when arguments are boolean', () => {
    assert.strictEqual(sum(true, false), 0);
  });
});
