function validateBrackets(s) {
  // Dictionary to hold matching pairs of brackets
  const matchingBracket = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  const stack = [];

  // Iterate over each character in the string
  for (let char of s) {
    // If it's an opening bracket, push it onto the stack
    if (Object.values(matchingBracket).includes(char)) {
      stack.push(char);
    }
    // If it's a closing bracket, check for a match with the top of the stack
    else if (Object.keys(matchingBracket).includes(char)) {
      if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets matched correctly
  return stack.length === 0;
}
console.log(validateBrackets('{}'));
