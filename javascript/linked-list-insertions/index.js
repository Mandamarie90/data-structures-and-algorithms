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
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) return; // List is empty

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;

    while (current && current.value !== value) {
      current = current.next;
    }

    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }
}


module.exports = { Node, LinkedList };
