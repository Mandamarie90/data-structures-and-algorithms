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
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  toArray() {
    let array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

function zipLists(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;
  let next1, next2;

  if (!current1) return list2;
  if (!current2) return list1;

  while (current1 !== null && current2 !== null) {
    next1 = current1.next;
    next2 = current2.next;

    current1.next = current2;
    if (next1 === null) {
      break;
    }
    current2.next = next1;

    current1 = next1;
    current2 = next2;
  }

  return list1;
}

module.exports = { LinkedList, zipLists };
