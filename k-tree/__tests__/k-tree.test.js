const { KaryTree, Node } = require('../kary-tree');
const fizzBuzzTree = require('../k-tree');

describe('fizzBuzzTree', () => {
  it('should return a new k-ary tree with modified values', () => {

    const rootNode = new Node(15);
    rootNode.addChild(new Node(3));
    rootNode.addChild(new Node(5));
    rootNode.addChild(new Node(7));
    const tree = new KaryTree(rootNode);

    const newTree = fizzBuzzTree(tree);


    expect(newTree.root.value).toBe('FizzBuzz');
    expect(newTree.root.children[0].value).toBe('Fizz');
    expect(newTree.root.children[1].value).toBe('Buzz');
    expect(newTree.root.children[2].value).toBe('7');
  });

  it('should handle a tree with no nodes', () => {
    const tree = new KaryTree(null);
    const newTree = fizzBuzzTree(tree);
    expect(newTree.root).toBe(null);
  });

  it('should handle a tree with a single node', () => {
    const rootNode = new Node(3);
    const tree = new KaryTree(rootNode);
    const newTree = fizzBuzzTree(tree);
    expect(newTree.root.value).toBe('Fizz');
  });

  it('should handle a tree with multiple levels', () => {
    const rootNode = new Node(15);
    rootNode.addChild(new Node(3));
    rootNode.addChild(new Node(5));
    const child1 = rootNode.children[0];
    child1.addChild(new Node(6));
    child1.addChild(new Node(8));
    rootNode.addChild(new Node(7));
    const tree = new KaryTree(rootNode);

    const newTree = fizzBuzzTree(tree);

    expect(newTree.root.value).toBe('FizzBuzz');
    expect(newTree.root.children[0].value).toBe('Fizz');
    expect(newTree.root.children[1].value).toBe('Buzz');
    expect(newTree.root.children[0].children[0].value).toBe('Fizz');
    expect(newTree.root.children[0].children[1].value).toBe('8');
    expect(newTree.root.children[1].children[0].value).toBe('7');
  });

  it('should handle a tree with negative numbers', () => {
    const rootNode = new Node(-15);
    rootNode.addChild(new Node(-3));
    rootNode.addChild(new Node(-5));
    rootNode.addChild(new Node(-7));
    const tree = new KaryTree(rootNode);

    const newTree = fizzBuzzTree(tree);

    expect(newTree.root.value).toBe('FizzBuzz');
    expect(newTree.root.children[0].value).toBe('Fizz');
    expect(newTree.root.children[1].value).toBe('Buzz');
    expect(newTree.root.children[2].value).toBe('7');
  });
});
