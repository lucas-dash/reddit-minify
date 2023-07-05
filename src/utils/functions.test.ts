import { describe, it } from 'vitest';
import { commentFormater, formatRelativeTime } from './functions';

describe('Func return formated timestamp in string', () => {
  it('should be 23 days ago', () => {
    expect(formatRelativeTime(1686579201)).toBe('23 days ago');
  });

  it('should be just now', () => {
    expect(formatRelativeTime(1698926221)).toBe('just now');
  });
  it('should be 2 hours ago', () => {
    expect(formatRelativeTime(1688579201)).toBe('2 hours ago');
  });
});

describe('Func return prettier numbers', () => {
  it('should be 15K', () => {
    expect(commentFormater(15291)).toBe('15K');
  });
  it('should be 4K', () => {
    expect(commentFormater(4000)).toBe('4K');
  });
});
