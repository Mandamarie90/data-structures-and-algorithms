const assert = require('assert');
const { compareByYearDesc, compareByTitle } = require('../index');

const testMovies = [
  { title: 'The Matrix', year: 1999, genres: ['Action', 'Sci-Fi'] },
  { title: 'A Beautiful Mind', year: 2001, genres: ['Biography', 'Drama'] },
  { title: 'An Inconvenient Truth', year: 2006, genres: ['Documentary'] },
  { title: 'Inception', year: 2010, genres: ['Action', 'Adventure', 'Sci-Fi'] },
  { title: 'The Shawshank Redemption', year: 1994, genres: ['Drama'] },
];

const sortedByYear = [...testMovies].sort(compareByYearDesc);
const sortedByTitle = [...testMovies].sort(compareByTitle);

console.log('Movies sorted by most recent year first:');
console.log(sortedByYear.map(movie => movie.title));

console.log('Movies sorted by title (ignoring leading articles):');
console.log(sortedByTitle.map(movie => movie.title));

assert.deepStrictEqual(sortedByYear.map(movie => movie.title), [
  'Inception',
  'An Inconvenient Truth',
  'A Beautiful Mind',
  'The Matrix',
  'The Shawshank Redemption'
]);

assert.deepStrictEqual(sortedByTitle.map(movie => movie.title), [
  'An Inconvenient Truth',
  'A Beautiful Mind',
  'Inception',
  'The Matrix',
  'The Shawshank Redemption'
]);

console.log("All tests passed!");
