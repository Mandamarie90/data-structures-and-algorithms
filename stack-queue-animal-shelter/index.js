class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.arrivalTime = Date.now();
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogs.push(animal);
    } else if (animal.species === 'cat') {
      this.cats.push(animal);
    } else {
      throw new Error("Animal must be either a 'dog' or a 'cat'.");
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogs.length > 0 ? this.dogs.shift() : null;
    } else if (pref === 'cat') {
      return this.cats.length > 0 ? this.cats.shift() : null;
    } else if (pref === undefined) {
      if (this.dogs.length === 0 && this.cats.length === 0) {
        return null;
      } else if (this.dogs.length === 0) {
        return this.cats.shift();
      } else if (this.cats.length === 0) {
        return this.dogs.shift();
      } else {
        if (this.dogs[0].arrivalTime < this.cats[0].arrivalTime) {
          return this.dogs.shift();
        } else {
          return this.cats.shift();
        }
      }
    } else {
      return null;
    }
  }
}

module.exports = { Animal, AnimalShelter };
