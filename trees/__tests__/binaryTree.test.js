const BinaryTree = require('../src/binaryTree');
const Node = require('../src/node');

describe('Binary Tree', () => {

  test('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    expect(tree.root.value).toBe(1);
  });

  test('Can successfully return a collection from a pre-order traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);

    expect(tree.preOrder()).toEqual([10, 5, 15]);
  });

  test('Can successfully return a collection from an in-order traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);

    expect(tree.inOrder()).toEqual([5, 10, 15]);
  });

  test('Can successfully return a collection from a post-order traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);

    expect(tree.postOrder()).toEqual([5, 15, 10]);
  });

});
