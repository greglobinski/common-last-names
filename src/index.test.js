import { expect } from 'chai';
import commonLastNames from '.';

describe('common-last-names', () => {
  it('should have a list of all available names', () => {
    expect(commonLastNames.all).to.satisfy(isArrayOfStrings);
  });

  it('should allow me to get a random name from the list', () => {
    expect(commonLastNames.random()).to.satisfy(isIncludedIn(commonLastNames.all));
  });
});

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string');
}

function isIncludedIn(array) {
  return item => array.includes(item);
}
