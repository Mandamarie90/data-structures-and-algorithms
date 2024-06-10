const { Stack, PseudoQueue } = require('../index'); // Adjust the path if necessary

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should push and pop values correctly', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
  });

  test('should peek the top value correctly', () => {
    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);

    stack.pop();
    expect(stack.peek()).toBe(10);
  });

  test('should return true when stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);

    stack.push(10);
    expect(stack.isEmpty()).toBe(false);

    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('should throw an error when popping from an empty stack', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  test('should throw an error when peeking into an empty stack', () => {
    expect(() => stack.peek()).toThrow('Stack is empty');
  });
});

describe('PseudoQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new PseudoQueue();
  });

  test('should enqueue and dequeue values correctly', () => {
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(15);
    expect(queue.dequeue()).toBe(20);
  });

  test('should maintain order of enqueued values', () => {
    queue.enqueue(10);
    queue.enqueue(15);

    expect(queue.dequeue()).toBe(10);

    queue.enqueue(20);
    expect(queue.dequeue()).toBe(15);
    expect(queue.dequeue()).toBe(20);
  });

  test('should throw an error when dequeuing from an empty queue', () => {
    expect(() => queue.dequeue()).toThrow('PseudoQueue is empty');
  });
});
