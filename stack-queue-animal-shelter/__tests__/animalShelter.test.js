const { Animal, AnimalShelter } = require('../index'); // Adjust the path as necessary

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('should enqueue dogs and cats correctly', () => {
    const dog1 = new Animal('Buddy', 'dog');
    const cat1 = new Animal('Whiskers', 'cat');
    shelter.enqueue(dog1);
    shelter.enqueue(cat1);

    expect(shelter.dogs).toHaveLength(1);
    expect(shelter.cats).toHaveLength(1);
    expect(shelter.dogs[0].name).toBe('Buddy');
    expect(shelter.cats[0].name).toBe('Whiskers');
  });

  test('should dequeue cats and dogs correctly based on preference', () => {
    const dog1 = new Animal('Buddy', 'dog');
    const cat1 = new Animal('Whiskers', 'cat');
    const dog2 = new Animal('Rex', 'dog');

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);

    expect(shelter.dequeue('cat').name).toBe('Whiskers');
    expect(shelter.dequeue('dog').name).toBe('Buddy');
  });

  test('should return null when no animals match the preference', () => {
    const dog1 = new Animal('Buddy', 'dog');
    shelter.enqueue(dog1);

    expect(shelter.dequeue('cat')).toBeNull();
    expect(shelter.dequeue('dog').name).toBe('Buddy');
    expect(shelter.dequeue('dog')).toBeNull();
  });

  test('should return the oldest animal if no preference is given', () => {
    const dog1 = new Animal('Buddy', 'dog');
    const cat1 = new Animal('Whiskers', 'cat');
    const dog2 = new Animal('Rex', 'dog');

    dog1.arrivalTime = 1000;
    cat1.arrivalTime = 2000;
    dog2.arrivalTime = 3000;

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);

    expect(shelter.dequeue().name).toBe('Buddy');
    expect(shelter.dequeue().name).toBe('Whiskers');
    expect(shelter.dequeue().name).toBe('Rex');
  });

  test('should return null if the shelter is empty', () => {
    expect(shelter.dequeue()).toBeNull();
    expect(shelter.dequeue('dog')).toBeNull();
    expect(shelter.dequeue('cat')).toBeNull();
  });

  test('should throw an error if an invalid animal is enqueued', () => {
    expect(() => {
      shelter.enqueue({ name: 'Bunny', species: 'rabbit' });
    }).toThrow("Animal must be either a 'dog' or a 'cat'.");
  });
});
