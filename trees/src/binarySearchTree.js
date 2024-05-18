const BinaryTree = require('./binaryTree');
const Node = require('./node');

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  // Add a node to the tree
  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // Check if a value exists in the tree
  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
    }
    return false;
  }
}

module.exports = BinarySearchTree;
