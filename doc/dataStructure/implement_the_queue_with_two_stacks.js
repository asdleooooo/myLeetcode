/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它
 * 的两个函数 appendTail 和 deleteHead ，分别
 * 完成在队列尾部插入整数和在队列头部删除整数的功能。(若
 * 队列中没有元素，deleteHead 操作返回 -1 )
 */


class CQueue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  };

  appendTail(val) {
    this.stackA.unshift(val);
  };
  deleteHead() {
    this.reverse();
    return this.stackB.shift() || -1;
  };

  reverse() {
    if(this.stackB.length > 0) this.stackB.shift();
    while (this.stackA.length > 0) {
      this.stackB.unshift(this.stackA.shift())
    }
  }
}

var queue = new CQueue();
queue.appendTail(1);
queue.appendTail(2);
queue.appendTail(3);
var param_2 = queue.deleteHead();