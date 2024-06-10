function fizzBuzzTree(tree) {
  if (!tree) return null;

  const newTree = new KaryTree(tree.root.value.toString());

  function traverse(node, newNode) {
    for (let child of node.children) {
      let newValue = '';
      if (child.value % 3 === 0) {
        newValue += 'Fizz';
      }
      if (child.value % 5 === 0) {
        newValue += 'Buzz';
      }
      if (newValue === '') {
        newValue = child.value.toString();
      }
      const newChild = newNode.addChild(newValue);
      traverse(child, newChild);
    }
  }

  traverse(tree.root, newTree.root);

  return newTree;
}
