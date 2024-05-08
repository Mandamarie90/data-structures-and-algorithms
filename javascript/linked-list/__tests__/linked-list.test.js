'use strict';
const { Node, LinkedList } = require('../index');


describe('LinkedList', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
  });
  it('Can properly insert into the linked list', () => {
    const ll = new LinkedList();
    ll.insert(10);
    expect(ll.head.value).toEqual(10);
    expect(ll.head.next).toBeNull();
  });
  it('The head property will properly point to the first node in the linked list', () => {
    const ll = new LinkedList();
    ll.insert(10);
    expect(ll.head.value).toEqual(10);
    ll.insert(20);
    expect(ll.head.value).toEqual(20);
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    const ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    expect(ll.head.value).toEqual(20);
    expect(ll.head.next.value).toEqual(10);
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    const ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    ll.insert(30);
    expect(ll.includes(20)).toBeTruthy();
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    expect(ll.includes(30)).toBeFalsy();
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const ll = new LinkedList();
    ll.insert(10);
    ll.insert(20);
    ll.insert(30);
    expect(ll.toString()).toEqual('{ 30 } -> { 20 } -> { 10 } -> NULL');
  });
});




// 'use strict';

// // Require our linked list implementation
// const LinkedList = require('../index');

// describe('Linked List', () => {
//   it('works', () => {
//     expect(true).toBeTruthy();
//   });
// });
