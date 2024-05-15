const { Stack, Queue } = require('../index');

describe('Stack Tests', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  test('Stack should be empty on instantiation', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  test('push method should add items to the top of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  test('pop method should remove the top item of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.peek()).toBe(1);
  });

  test('pop method should throw an error if the stack is empty', () => {
    expect(() => stack.pop()).toThrow("Pop from empty stack");
  });
});

describe('Queue Tests', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  test('Queue should be empty on instantiation', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('enqueue method should add items to the back of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  test('dequeue method should remove the front item of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.peek()).toBe(2);
  });

  test('dequeue method should throw an error if the queue is empty', () => {
    expect(() => queue.dequeue()).toThrow("Dequeue from empty queue");
  });
});
