/**
一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。
请写程序找出这两个只出现一次的数字。
[2,4,3,6,3,2,5,5] 只有4、6出现了一次
 */
// 常规解法 Map
function FindNumsAppearOnce(array)
{
  // write code here
  // return list, 比如[a,b]，其中ab是出现一次的两个数字
  let map = new Map();
  let res = [];
  for(let v of array) {
    map.set(v, (map.get(v) || 0) + 1)
  }
  for(let [key, value] of map) {
    if(value === 1) res.push(key)
  }
  return res;
}

/*
首先，两个相同的数字异或=0，一个数和0异或还是它本身。
这个题目有2个相同的数，我们需要把他们分为两组；
首先对整个数组异或，结果就是A^B，得到的结果是A与B中不相同的位数，再根据这不相同的位将数组划分
最后划分的两个数组分别异或即可
*/
function FindNumsAppearOnce(array) {
  let tmp = array.reduce((prev, curr) => (prev^curr));
  if(tmp === 0) return; // 没有不同的值
  let index = 0; // 记录第一个不同的位数
  while((tmp & 1) === 0) {
    tmp = tmp >> 1;
    index++;
  }
  let num1 = 0, num2 = 0;
  for(let v of array) {
    if(isOneAtIndex(v, index)) {
      num1 = num1^v;
    } else {
      num2 = num2^v;
    }
  }
  return [num1, num2];
}
function isOneAtIndex(num, index) {
  num = num >> index;
  return num & 1;
}