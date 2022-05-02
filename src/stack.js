const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); //   but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 

class Stack {
  constructor(){
    this.stack = []
  }
  push(element) {
    this.stack.push(element)
  }
  
  pop() {
    return this.stack.pop()
    
  }

  peek() {
    return this.stack[this.stack.length-1]
  }
}
// const stack = new Stack();
// console.log(stack)
// stack.push(2)
// console.log(stack)
//  console.log(stack.peek())
 
//  console.log(stack.pop())
//  console.log(stack)

module.exports = {
  Stack
};
