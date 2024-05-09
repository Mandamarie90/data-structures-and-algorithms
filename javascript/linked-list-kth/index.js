class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  kthFromEnd(k) {
    if (k < 0) {
      throw new Error("k must be a non-negative integer");
    }

    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; i++) {
      if (!fast) {
        throw new Error("k is greater than the length of the linked list");
      }
      fast = fast.next;
    }

    if (!fast) {
      throw new Error("k is the same as the length of the linked list");
    }

    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.value;
  }
}

module.exports = { Node, LinkedList };

