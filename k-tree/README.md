# Fizz Buzz Tree

## Whiteboard Process


## Description
This function takes a k-ary tree as input and returns a new k-ary tree with modified values based on the FizzBuzz game rules. It traverses the original tree, determines whether each node's value is divisible by 3, 5, or both, and replaces the values accordingly.

- If the value is divisible by 3, it is replaced with "Fizz".
- If the value is divisible by 5, it is replaced with "Buzz".
- If the value is divisible by both 3 and 5, it is replaced with "FizzBuzz".
- If the value is not divisible by 3 or 5, it is converted to a string.

## Approach & Efficiency
I used a recursive approach to traverse the original tree and create the new tree. The function has a time complexity of O(n) and a space complexity of O(n), where n is the number of nodes in the tree.

## Solution
To use this function, first create a k-ary tree structure and a root node. Then, call the fizzBuzzTree function with the original tree to get a new tree with modified values.

Example:

```javascript

const tree = new KaryTree(rootNode);

const newTree = fizzBuzzTree(tree);

```
