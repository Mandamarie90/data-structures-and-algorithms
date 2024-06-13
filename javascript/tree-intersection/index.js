class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

function tree_intersection(tree1, tree2) {
  const hashmap = new Map();
  const result = new Set();

  function traverseAndStore(node) {
    if (node !== null) {
      hashmap.set(node.value, true);
      traverseAndStore(node.left);
      traverseAndStore(node.right);
    }
  }

  function traverseAndCheck(node) {
    if (node !== null) {
      if (hashmap.has(node.value)) {
        result.add(node.value);
      }
      traverseAndCheck(node.left);
      traverseAndCheck(node.right);
    }
  }

  traverseAndStore(tree1.root);
  traverseAndCheck(tree2.root);

  return result;
}

module.exports = { TreeNode, BinaryTree, tree_intersection };
