const { KaryTree, Node } = require('../k-tree/kary-tree');

function fizzBuzzTree(tree) {
  if (!tree || !tree.root) {
      return new KaryTree(null);
  }

  const newRoot = new Node(fizzBuzzValue(tree.root.value));
  const newTree = new KaryTree(newRoot);

  function traverse(node, newNode) {
      if (!node || !node.children) {
          return;
      }
      for (let child of node.children) {
          if (child && child.value !== null && child.value !== undefined) {
              const newChild = new Node(fizzBuzzValue(child.value));
              newNode.addChild(newChild);
              traverse(child, newChild);
          }
      }
  }

  traverse(tree.root, newRoot);

  return newTree;
}

function fizzBuzzValue(value) {
  if (value === null || value === undefined) {
      return value;
  }
  let num = Math.abs(value);
  let result;
  if (num % 3 === 0 && num % 5 === 0) {
      result = 'FizzBuzz';
  } else if (num % 3 === 0) {
      result = 'Fizz';
  } else if (num % 5 === 0) {
      result = 'Buzz';
  } else {
      result = num.toString();
  }
  // Handle negative numbers
  if (value < 0) {
      result = '-' + result;
  }
  return result;
}




module.exports = fizzBuzzTree;

