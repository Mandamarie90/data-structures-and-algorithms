const BinarySearchTree = require('../src/binarySearchTree');

describe('Binary Search Tree', () => {

  test('Can successfully add a left child and right child properly to a node', () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);

    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  test('Returns true/false for the contains method, given an existing or non-existing node value', () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);

    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
    expect(bst.contains(20)).toBe(false);
  });

});
