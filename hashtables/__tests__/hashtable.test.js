const Hashtable = require('../hashtable');

test('Setting a key/value to the hashtable results in the value being in the data structure', () => {
  let ht = new Hashtable();
  ht.set('hello', 'world');
  expect(ht.get('hello')).toBe('world');
});

test('Retrieving based on a key returns the value stored', () => {
  let ht = new Hashtable();
  ht.set('hello', 'world');
  expect(ht.get('hello')).toBe('world');
});

test('Successfully returns null for a key that does not exist in the hashtable', () => {
  let ht = new Hashtable();
  expect(ht.get('nonexistent')).toBe(null);
});

test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
  let ht = new Hashtable();
  ht.set('hello', 'world');
  ht.set('foo', 'bar');
  expect(ht.keys()).toEqual(expect.arrayContaining(['hello', 'foo']));
});

test('Successfully handle a collision within the hashtable', () => {
  let ht = new Hashtable(2);
  ht.set('hello', 'world');
  ht.set('foo', 'bar');
  expect(ht.keys()).toEqual(expect.arrayContaining(['hello', 'foo']));
});

test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
  let ht = new Hashtable(2);
  ht.set('hello', 'world');
  ht.set('foo', 'bar');
  expect(ht.get('foo')).toBe('bar');
  expect(ht.get('hello')).toBe('world');
});

test('Successfully hash a key to an in-range value', () => {
  let ht = new Hashtable(10);
  let index = ht._hash('hello');
  expect(index).toBeLessThan(10);
});
