/*
输入一个递增排序的数组和一个数字S，在数组中查找两个数，
使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
输出描述:
对应每个测试案例，输出两个数，小的先输出。
*/
// 暴力Map法
function FindNumbersWithSum(array, sum)
{
  // write code here
  let map = new Map();
  let resArr = [];
  for(let v of array) {
    if(map.get(sum - v)) {
      const a = v;
      const b = sum - v;
      if(b > a) resArr.push([a, b])
      else resArr.push([b, a])
      continue;
    }
    map.set(v, sum - v);
  }
  return resArr.sort((a, b) => (a[0] * a[1] - b[0] * b[1]))[0] || [];
}
let a = FindNumbersWithSum([1,2,4,7,11,15], 15)
// let b = FindNumbersWithSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],21)

// 双指针法
function FindNumbersWithSum(array, sum)
{
  // write code here
  if(array.length < 2) return [];
  let left = 0, right = array.length - 1, res = [];
  while(left < right) {
    if(array[left] + array[right] === sum) {
      return [array[left], array[right]];
    } else if(array[left] + array[right] > sum) {
      right--;
    } else {
      left++;
    }
  }
  return res;
}

