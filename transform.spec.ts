// transform.spec.ts
import { transform } from './transform';

describe('transform', () => {
  describe('input value is undefined', () => {
    it('should return 0', () => {
      expect(transform(undefined)).toEqual(0);
    });
  });

  describe('input value is null', () => {
    it('should return 0', () => {
      expect(transform(null)).toEqual(0);
    });
  });

  describe('input value is -10', () => {
    it('should return -1', () => {
      expect(transform(-10)).toEqual(-1);
    });
  });

  describe('input value is -1', () => {
    it('should return -1', () => {
      expect(transform(-1)).toEqual(-1);
    });
  });

  describe('input value is 0', () => {
    it('should return 0', () => {
      expect(transform(0)).toEqual(0);
    });
  });

  describe('input value is 10', () => {
    it('should return 1', () => {
      expect(transform(10)).toEqual(1);
    });
  });

  describe('input value is 1', () => {
    it('should return 1', () => {
      expect(transform(1)).toEqual(1);
    });
  });
});
