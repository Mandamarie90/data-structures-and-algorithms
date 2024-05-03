# Challenge Title

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Create a Linked List class. Within your Linked List class, include a head property. Upon instantiation, an empty Linked List should be created.

## Whiteboard Process

Whiteboard not required today.

## Approach & Efficiency

Constructor, insert method, includes method and ToString method.
BIG O
 Insert Method: O(1). Inserting a new node at the beginning of the list does not require traversing the list. This operation is constant time because it merely involves pointing the new node’s next to the current head, and then updating head to the new node.
 Includes Method: O(n). To find whether a specific value exists, you have to potentially check every element in the list until you find the target or reach the end of the list. Therefore, in the worst case, the time complexity is linear relative to the number of nodes in the list.
 ToString Method: O(n). This method also requires traversing the entire list to convert each value into a string format, resulting in a linear time complexity as each node is visited once.
 Big O Space Complexity
Insert Method: O(1). The space required does not depend on the size of the input list since only one new node is created each time the method is called.
Includes Method: O(1). This method uses a constant amount of space as it only needs one pointer (current) to traverse the list.
ToString Method: O(n). The space complexity here is linear because you need space to build a string that represents all the nodes in the list. The length of this string grows linearly with the number of nodes in the list.

## Solution

Install Node.js on machine.  Run index.js.
