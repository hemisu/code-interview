/*
给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
*/
/* 
双向队列法

用一个队列来保存目前窗口里最大的值的下标
每次移动窗口需要判断，当前的最大值是否过期和新增的是否大于队列中最大的值。
队列中的第一个值为当前窗口的最大值下标。
*/
function maxInWindows(num, size)
{
  // write code here
  let res = [];
  if(size === 0) return res;
  let begin, queue = [];
  for(let i = 0; i < num.length; i++) {
    begin = i - size + 1; // 滑动窗口左边界
    if(queue.length === 0) { // 确保队列中至少有一个值
      queue.push(i);
    } else if (begin > queue[0]) { // 最大值过期
      queue.shift();
    }
    while(queue.length !== 0 && num[i] >= num[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
    if(begin >= 0) {
      res.push(num[queue[0]]); // 保存窗口中的最大值
    }
  }
  return res;
}

const res = maxInWindows([2,3,4,2,6,2,5,1], 3);
