const { Node, LinkedList } = require('../index');

describe('LinkedList', () => {
  it('should append node to end of list', () => {
    const ll = new LinkedList();
    ll.append(1);
    expect(ll.head.value).toBe(1);
    ll.append(2);
    expect(ll.head.next.value).toBe(2);
  });

  it('should append multiple nodes to end of list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    expect(ll.head.next.next.value).toBe(3);
  });

  it('should insert node before node located in the middle of the list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(4);
    ll.insertBefore(3, 2);
    expect(ll.head.next.value).toBe(2);
  });

  it('should insert node before the first node of a linked list', () => {
    const ll = new LinkedList();
    ll.append(2);
    ll.insertBefore(2, 1);
    expect(ll.head.value).toBe(1);
  });

  it('should insert node after a node in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(4);
    ll.insertAfter(2, 3);
    expect(ll.head.next.next.value).toBe(3);
  });

  it('should insert node after the last node of the linked list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.insertAfter(3, 4);
    expect(ll.head.next.next.next.value).toBe(4);
  });
});
