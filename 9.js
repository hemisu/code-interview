/**
 * 题目描述
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
并保证奇数和奇数，偶数和偶数之间的相对位置不变。

考虑使用双指针法
 */
const testArr = [1,2,3,4,5,6,7];

// 这种方式只能解答书上的，不要求顺序
// function reOrderArray(array)
// {
//   // write code here
//   let left, right;
//   for(left = 0, right = array.length - 1; left < right;) {
//     if ((array[left] & 1) === 1) { // 左指针是奇数 右移
//       left += 1;
//       continue;
//     }
//     if ((array[right] & 1) === 0) { // 右指针是偶数 左移
//       right -= 1;
//       continue;
//     }
//     swap(array, left, right);
//   }
//   return array;
// }

// function swap (arr, l, r) {
//   [arr[l] , arr[r]] = [arr[r], arr[l]];
// }

// 以下方法复杂度为O(n)
function reOrderArray(array) {
  const result = [];
  let oddArrIndex = 0, oddBegin = 0; // 用于记录一共有几个奇数
  let len = array.length;
  for(let i of array) {
    if(i & 1) oddArrIndex += 1;
  }
  for(let i = 0; i < len; i++) {
    if(array[i] & 1) {
      result[oddBegin++] = array[i]; 
    } else{
      result[oddArrIndex++] = array[i];
    }
  }
  return result;
}

console.dir(reOrderArray(testArr));