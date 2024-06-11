
const { repeatedWord } = require('../hashmap.js');

describe('repeatedWord', () => {
  test('returns the first repeated word', () => {
    expect(repeatedWord('Once upon a time, there was a brave princess who...')).toBe('a');
    expect(repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom...')).toBe('it');
  });

  test('returns null if no repeated word is found', () => {
    expect(repeatedWord('Hello world!')).toBeNull();
  });

  test('correctly handles case and punctuation', () => {
    expect(repeatedWord('It was a queer, sultry Summer, the summer they electrocuted the Rosenbergs...')).toBe('summer');
  });
});
