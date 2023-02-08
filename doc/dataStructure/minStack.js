/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈
 * 的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.unshift(x);
  this.minStack[0] - x > 0 ? this.minStack.unshift(x) : this.minStack.unshift(this.minStack[0]);

  return this.stack
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStack.shift();
  return this.stack.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[0]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minStack[0]
};

/**
 * Your MinStack object will be instantiated and called as such:
*/
var obj = new MinStack()
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.min()
console.log(param_3, param_4);