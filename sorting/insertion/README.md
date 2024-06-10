## Blog Article: Visualizing Insertion Sort

### Introduction
Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one item at a time. It is much like sorting playing cards in your hands. The algorithm iterates through the input list and grows a sorted output list. At each iteration, it removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.

### Pseudocode
Let's start by reviewing the pseudocode for the `Insert` and `InsertionSort` functions:

#### Insert Function
```plaintext
Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value
    set value to temp
    set i to i + 1
  append value to sorted
```

#### InsertionSort Function
```plaintext
InsertionSort(int[] input)
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted
```

### Sample Array: [8, 4, 23, 42, 16, 15]
Let's visualize each step of the Insertion Sort process using the sample array `[8, 4, 23, 42, 16, 15]`.

#### Initial Array
```plaintext
[8, 4, 23, 42, 16, 15]
```

#### Step-by-Step Process

**Step 1: Initialize Sorted Array with First Element**
```plaintext
sorted = [8]
input = [4, 23, 42, 16, 15]
```

**Step 2: Insert 4 into Sorted Array**
- 4 is less than 8, so it goes to the beginning.
```plaintext
sorted = [4, 8]
input = [23, 42, 16, 15]
```

**Step 3: Insert 23 into Sorted Array**
- 23 is greater than 8, so it goes to the end.
```plaintext
sorted = [4, 8, 23]
input = [42, 16, 15]
```

**Step 4: Insert 42 into Sorted Array**
- 42 is greater than 23, so it goes to the end.
```plaintext
sorted = [4, 8, 23, 42]
input = [16, 15]
```

**Step 5: Insert 16 into Sorted Array**
- 16 is greater than 8 but less than 23, so it goes between 8 and 23.
```plaintext
sorted = [4, 8, 16, 23, 42]
input = [15]
```

**Step 6: Insert 15 into Sorted Array**
- 15 is greater than 8 but less than 16, so it goes between 8 and 16.
```plaintext
sorted = [4, 8, 15, 16, 23, 42]
input = []
```

### Final Sorted Array
```plaintext
[4, 8, 15, 16, 23, 42]
```

### Visual Representation
Here is a visual step-through of the process:

1. **Initial Array:** [8, 4, 23, 42, 16, 15]
2. **Step 2:** [4, 8] + [23, 42, 16, 15]
3. **Step 3:** [4, 8, 23] + [42, 16, 15]
4. **Step 4:** [4, 8, 23, 42] + [16, 15]
5. **Step 5:** [4, 8, 16, 23, 42] + [15]
6. **Step 6:** [4, 8, 15, 16, 23, 42]

### Implementation
Now let's convert the pseudocode into a working JavaScript implementation and test it with various input arrays.

#### JavaScript Implementation
```javascript
function insert(sorted, value) {
  let i = 0;
  while (i < sorted.length && value > sorted[i]) {
    i++;
  }
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);
}

function insertionSort(input) {
  let sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
}

// Sample Arrays
console.log(insertionSort([8, 4, 23, 42, 16, 15]));
console.log(insertionSort([20, 18, 12, 8, 5, -2]));
console.log(insertionSort([5, 12, 7, 5, 5, 7]));
console.log(insertionSort([2, 3, 5, 7, 13, 11]));
```

### Testing
Let's test our implementation with different sample arrays:

```javascript
console.log(insertionSort([8, 4, 23, 42, 16, 15])); // [4, 8, 15, 16, 23, 42]
console.log(insertionSort([20, 18, 12, 8, 5, -2])); // [-2, 5, 8, 12, 18, 20]
console.log(insertionSort([5, 12, 7, 5, 5, 7])); // [5, 5, 5, 7, 7, 12]
console.log(insertionSort([2, 3, 5, 7, 13, 11])); // [2, 3, 5, 7, 11, 13]
```

### Conclusion
Insertion Sort is an efficient algorithm for small or nearly sorted data sets. It works well with linked lists and is stable and in-place. By understanding and visualizing each step of the algorithm, we can better grasp how it works and implement it effectively.

### Full Code
```javascript
function insert(sorted, value) {
  let i = 0;
  while (i < sorted.length && value > sorted[i]) {
    i++;
  }
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);
}

function insertionSort(input) {
  let sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
}

// Sample Arrays
console.log(insertionSort([8, 4, 23, 42, 16, 15]));
console.log(insertionSort([20, 18, 12, 8, 5, -2]));
console.log(insertionSort([5, 12, 7, 5, 5, 7]));
console.log(insertionSort([2, 3, 5, 7, 13, 11]));
```

By following this step-by-step process, you should have a clear understanding of how Insertion Sort works and be able to implement it in your projects.


