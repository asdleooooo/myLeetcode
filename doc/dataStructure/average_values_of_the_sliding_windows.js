/**
 * 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。
 */


/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.sum = 0;
  this.window = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.sum += val;
  this.window.push(val);
  if(this.window.length > this.size) {
    this.sum -= (this.window.shift());
  }

  return this.sum / this.window.length
};

var movingAverage = new MovingAverage(3);
movingAverage.next(1); // 返回 1.0 = 1 / 1
movingAverage.next(10); // 返回 5.5 = (1 + 10) / 2
movingAverage.next(3); // 返回 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // 返回 6.0 = (10 + 3 + 5) / 3