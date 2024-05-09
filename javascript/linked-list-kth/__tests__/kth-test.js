const { LinkedList } = require('../index.js'); // Adjust the path as needed

describe('LinkedList kthFromEnd', () => {
  let ll;

  beforeEach(() => {
    ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
  });

  test('k is greater than the length of the linked list', () => {
    expect(() => ll.kthFromEnd(5)).toThrow('k is greater than the length of the linked list');
  });

  test('k and the length of the list are the same', () => {
    expect(() => ll.kthFromEnd(4)).toThrow('k is the same as the length of the linked list');
  });

  test('k is not a positive integer', () => {
    expect(() => ll.kthFromEnd(-1)).toThrow('k must be a non-negative integer');
  });

  xtest('linked list is of a size 1', () => {
    const smallList = new LinkedList();
    smallList.append(7);
    expect(smallList.kthFromEnd(0)).toBe(7);
    expect(() => smallList.kthFromEnd(1)).toThrow('k is greater than the length of the linked list');
  });

  test('Happy Path', () => {
    expect(ll.kthFromEnd(0)).toBe(2);
    expect(ll.kthFromEnd(2)).toBe(3);
  });
});

