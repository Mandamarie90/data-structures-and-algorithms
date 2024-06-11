class HashMap {
  constructor() {
    this.storage = [];
  }

  // Simple hash function to convert a string into an array index
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  set(key, value) {
    const index = this._hash(key);
    this.storage[index] = this.storage[index] || [];
    this.storage[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const items = this.storage[index];
    if (items) {
      for (let item of items) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return null;
  }
}

function repeatedWord(input) {
  const wordCount = new HashMap();
  const words = input.toLowerCase().replace(/[^\w\s]/gi, '').split(/\s+/);

  for (const word of words) {
    if (wordCount.get(word)) {
      return word; // Return the first repeated word
    }
    wordCount.set(word, 1); // Set the word in the map if it's not already there
  }
  return null; // Return null if no repeated word is found
}

module.exports = { HashMap, repeatedWord };
