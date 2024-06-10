class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

class KaryTree {
  constructor(root) {
    this.root = root;
  }
}

module.exports = { KaryTree, Node };
