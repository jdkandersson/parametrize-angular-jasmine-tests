// transform.parametrized.spec.ts
import { transform } from './transform';

describe('transform parametrized tests', () => {
  // Defining input value and expected transformation
  [
    { inputValue: undefined, expectedValue: 0 },
    { inputValue: null, expectedValue: 0 },
    { inputValue: -10, expectedValue: -1 },
    { inputValue: -1, expectedValue: -1 },
    { inputValue: 0, expectedValue: 0 },
    { inputValue: 1, expectedValue: 1 },
    { inputValue: 10, expectedValue: 1 }
  ].forEach(({inputValue, expectedValue}) => {
    describe(`input is ${inputValue}`, () => {
      it(`should return ${expectedValue}`, () => {
        expect(transform(inputValue)).toEqual(expectedValue);
      });
    });
  });
});
