/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 */



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let maxSlidingWindow = [];
  let result = [];
  let maxRangeCount = nums.length - k + 2;
  let resultIndex = 0;
  if(nums.length <= k) {
    nums.forEach((item, index) => {
      if (index == 0) { result[resultIndex] = item; }
      if (result[resultIndex] < item) { result[resultIndex] = item; }
    })
    return result;
  }
  // 遍历nums，每次移动一步，直到移动到length-k-1的地方停止
  for (let i = 0; i <= maxRangeCount; i++) {
    maxSlidingWindow.unshift(nums[i]);
    
    if (k >= i+2) continue;

    // 开始获取最大值
    maxSlidingWindow.forEach((item, index) => {
      if (index == 0) { result[resultIndex] = item; }
      if (result[resultIndex] < item) { result[resultIndex] = item; }
    });
    maxSlidingWindow.pop();
    resultIndex++;
  }
  return result
};

var nums = [1, 3, -1, -3, 5, 3, 6, 7];
var nums1 = [1];
var nums2 = [1, 2];


console.log(maxSlidingWindow(nums, 3));
console.log(maxSlidingWindow(nums1, 1));
console.log(maxSlidingWindow(nums2, 3));