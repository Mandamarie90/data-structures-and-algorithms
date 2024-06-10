const Node = require('./node');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Pre-order traversal (Root, Left, Right)
  preOrder() {
    let result = [];
    function traverse(node) {
      if (!node) return;
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  // In-order traversal (Left, Root, Right)
  inOrder() {
    let result = [];
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  // Post-order traversal (Left, Right, Root)
  postOrder() {
    let result = [];
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }
}

module.exports = BinaryTree;
