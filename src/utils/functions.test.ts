import { describe, it } from 'vitest';
import { commentFormater } from './functions';

// describe('Func return formated timestamp in string', () => {
//   it('should be 4 hours ago', () => {
//     expect(formatRelativeTime(1686579201)).toBe('4 hours ago');
//   });

//   it('should be 14 hours ago', () => {
//     expect(formatRelativeTime(1686542640)).toBe('14 hours ago');
//   });
// });

describe('Func return prettier numbers', () => {
  it('should be 15K', () => {
    expect(commentFormater(15291)).toBe('15K');
  });
  it('should be 4K', () => {
    expect(commentFormater(4000)).toBe('4K');
  });
});
