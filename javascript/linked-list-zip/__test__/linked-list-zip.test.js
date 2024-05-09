const { LinkedList, zipLists } = require('../index');

describe('LinkedList Zip Function', () => {
  test('Zip two lists of equal length', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list2.append(5);
    list2.append(9);
    let zipped = zipLists(list1, list2);
    expect(zipped.toArray()).toEqual([1, 5, 3, 9]);
  });

  test('Zip two lists when first list is longer', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);
    list2.append(5);
    let zipped = zipLists(list1, list2);
    expect(zipped.toArray()).toEqual([1, 5, 3, 2]);
  });

  test('Zip two lists when second list is longer', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.append(1);
    list2.append(5);
    list2.append(9);
    list2.append(4);
    let zipped = zipLists(list1, list2);
    expect(zipped.toArray()).toEqual([1, 5, 9, 4]);
  });

  test('Zip with one empty list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    let zipped = zipLists(list1, list2);
    expect(zipped.toArray()).toEqual([1, 3]);
  });
});
