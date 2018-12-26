/**
小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!
输出描述:
输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
 */
// 双指针法 自己想的 有优化空间
function FindContinuousSequence(sum)
{
  // write code here
  const arr = Array.from({length: 100}, (v, k) => k + 1); // 创建[1, 2...,100]
  let res = [];
  let left = 0, right = 0;
  for(;right < arr.length; right++) {
    let tmp = arr.slice(left, right + 1).reduce((a, b) => (a + b), 0);
    while(tmp >= sum) {
      if(tmp === sum && right !== left) {
        res.push(arr.slice(left, right + 1));
        break;
      } 
      left++;
      tmp = arr.slice(left, right + 1).reduce((a, b) => (a + b), 0);
    }
  }
  return res;
}
// 从左开始
function FindContinuousSequence(sum)
{
  // write code here
  if(sum < 3) return [];
  let small = 1;
  let big = 2;
  let mid = (1 + sum) >> 1;
  let curSum = small + big;
  let res = [];
  while(small < mid) {
    if(curSum === sum) {
      res.push(Array.from({length: big - small + 1}, (v, k) => (small + k)))
    }
    while(curSum > sum && small < mid) {
      curSum -= small;
      small++;
      if(curSum === sum) {
        res.push(Array.from({length: big - small + 1}, (v, k) => (small + k)))
      }
    }
    big++;
    curSum += big;
  }
  return res;
}
console.log(JSON.stringify(FindContinuousSequence(3)));