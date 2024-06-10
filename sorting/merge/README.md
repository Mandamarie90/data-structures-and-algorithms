## Blog Article: Step-by-Step Guide to Merge Sort with Visuals

### Introduction
Merge Sort is a classic sorting algorithm that uses the divide-and-conquer technique to sort an array. In this article, we'll walk through the Merge Sort algorithm step-by-step using the pseudocode provided and visually show the output at each iteration. Finally, we'll implement a working version of Merge Sort in JavaScript and provide a set of tests.

### Pseudocode for Merge Sort
Let's start by understanding the pseudocode:

```pseudo
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

### Visual Step-by-Step Guide

#### Initial Array: [8, 4, 23, 42, 16, 15]

1. **Splitting Phase**

   **Iteration 1:**
   ```
   Split: [8, 4, 23] and [42, 16, 15]
   ```

   **Iteration 2:**
   ```
   Split: [8] and [4, 23]
   Split: [42] and [16, 15]
   ```

   **Iteration 3:**
   ```
   Split: [4] and [23]
   Split: [16] and [15]
   ```

2. **Merging Phase**

   **Iteration 4:**
   ```
   Merge: [4] and [23] to form [4, 23]
   Merge: [16] and [15] to form [15, 16]
   ```

   **Iteration 5:**
   ```
   Merge: [8] and [4, 23] to form [4, 8, 23]
   Merge: [42] and [15, 16] to form [15, 16, 42]
   ```

   **Iteration 6:**
   ```
   Merge: [4, 8, 23] and [15, 16, 42] to form [4, 8, 15, 16, 23, 42]
   ```

### Implementation in JavaScript
Now, let's convert the pseudocode into a working implementation in JavaScript.

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Concatenate the remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Testing the Merge Sort implementation
const arrays = [
  [8, 4, 23, 42, 16, 15],
  [20, 18, 12, 8, 5, -2],
  [5, 12, 7, 5, 5, 7],
  [2, 3, 5, 7, 13, 11]
];

arrays.forEach(arr => {
  console.log(`Original Array: ${arr}`);
  const sortedArray = mergeSort(arr);
  console.log(`Sorted Array: ${sortedArray}\n`);
});
```

### Testing the Implementation
Let's test the `mergeSort` function with various types of input arrays.

```javascript
// Test Case 1: [8, 4, 23, 42, 16, 15]
console.log(mergeSort([8, 4, 23, 42, 16, 15])); // Expected Output: [4, 8, 15, 16, 23, 42]

// Test Case 2: Reverse-sorted array [20, 18, 12, 8, 5, -2]
console.log(mergeSort([20, 18, 12, 8, 5, -2])); // Expected Output: [-2, 5, 8, 12, 18, 20]

// Test Case 3: Few uniques [5, 12, 7, 5, 5, 7]
console.log(mergeSort([5, 12, 7, 5, 5, 7])); // Expected Output: [5, 5, 5, 7, 7, 12]

// Test Case 4: Nearly-sorted [2, 3, 5, 7, 13, 11]
console.log(mergeSort([2, 3, 5, 7, 13, 11])); // Expected Output: [2, 3, 5, 7, 11, 13]
```

### Conclusion
In this article, we've walked through the Merge Sort algorithm step-by-step, providing visual aids to understand the process better. We then implemented the algorithm in JavaScript and tested it with different types of input arrays. Merge Sort is an efficient, stable sorting algorithm with a time complexity of O(n log n), making it suitable for various sorting tasks.
