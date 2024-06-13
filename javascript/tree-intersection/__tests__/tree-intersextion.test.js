const { TreeNode, BinaryTree, tree_intersection } = require('../index');

describe('tree_intersection', () => {
  it('should return common values between two trees with characters', () => {
    const tree1 = new BinaryTree(new TreeNode('A', new TreeNode('B', new TreeNode('D'), new TreeNode('E')), new TreeNode('C')));
    const tree2 = new BinaryTree(new TreeNode('C', new TreeNode('B', new TreeNode('G'), new TreeNode('E')), new TreeNode('F')));

    expect(tree_intersection(tree1, tree2)).toEqual(new Set(['B', 'E', 'C']));
  });

  it('should return an empty set when there are no common values', () => {
    const tree1 = new BinaryTree(new TreeNode('A', new TreeNode('B'), new TreeNode('C')));
    const tree2 = new BinaryTree(new TreeNode('X', new TreeNode('Y'), new TreeNode('Z')));

    expect(tree_intersection(tree1, tree2)).toEqual(new Set());
  });

  it('should return all values when both trees are the same', () => {
    const tree1 = new BinaryTree(new TreeNode('A', new TreeNode('B'), new TreeNode('C')));
    const tree2 = new BinaryTree(new TreeNode('A', new TreeNode('B'), new TreeNode('C')));

    expect(tree_intersection(tree1, tree2)).toEqual(new Set(['A', 'B', 'C']));
  });

  it('should handle trees with duplicate values', () => {
    const tree1 = new BinaryTree(new TreeNode('A', new TreeNode('A'), new TreeNode('A')));
    const tree2 = new BinaryTree(new TreeNode('A', new TreeNode('A'), new TreeNode('A')));

    expect(tree_intersection(tree1, tree2)).toEqual(new Set(['A']));
  });

  it('should handle empty trees', () => {
    const tree1 = new BinaryTree(null);
    const tree2 = new BinaryTree(null);

    expect(tree_intersection(tree1, tree2)).toEqual(new Set());
  });

  it('should handle one empty tree', () => {
    const tree1 = new BinaryTree(new TreeNode('A', new TreeNode('B'), new TreeNode('C')));
    const tree2 = new BinaryTree(null);

    expect(tree_intersection(tree1, tree2)).toEqual(new Set());
  });

  it('should handle trees with single nodes', () => {
    const tree1 = new BinaryTree(new TreeNode('A'));
    const tree2 = new BinaryTree(new TreeNode('A'));

    expect(tree_intersection(tree1, tree2)).toEqual(new Set(['A']));
  });

  it('should return an empty set when single nodes do not match', () => {
    const tree1 = new BinaryTree(new TreeNode('A'));
    const tree2 = new BinaryTree(new TreeNode('B'));

    expect(tree_intersection(tree1, tree2)).toEqual(new Set());
  });

  it('should handle unbalanced trees', () => {
    const tree1 = new BinaryTree(new TreeNode('A', new TreeNode('B', new TreeNode('C'))));
    const tree2 = new BinaryTree(new TreeNode('C', new TreeNode('B', new TreeNode('A'))));

    expect(tree_intersection(tree1, tree2)).toEqual(new Set(['A', 'B', 'C']));
  });
});
