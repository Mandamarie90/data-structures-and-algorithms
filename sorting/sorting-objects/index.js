function compareByYearAsc(a, b) {
  return a.year - b.year; // Sort in ascending order
}



function compareByTitleAsc(a, b) {
  const titleA = removeLeadingArticles(a.title);
  const titleB = removeLeadingArticles(b.title);
  return titleA.localeCompare(titleB); // Sort in ascending alphabetical order
}





function removeLeadingArticles(title) {
  return title.replace(/^(a |an |the )/i, '').trim();
}




const movies = [
  { title: 'The Matrix', year: 1999, genres: ['Action', 'Sci-Fi'] },
  { title: 'A Beautiful Mind', year: 2001, genres: ['Biography', 'Drama'] },
  { title: 'An Inconvenient Truth', year: 2006, genres: ['Documentary'] },
  { title: 'Inception', year: 2010, genres: ['Action', 'Adventure', 'Sci-Fi'] },
  { title: 'The Shawshank Redemption', year: 1994, genres: ['Drama'] },
];

const sortedByYear = [...movies].sort(compareByYearAsc);
const sortedByTitle = [...movies].sort(compareByTitleAsc);



console.log('Movies sorted by most recent year first:');
console.log(sortedByYear);

console.log('Movies sorted by title (ignoring leading articles):');
console.log(sortedByTitle);
