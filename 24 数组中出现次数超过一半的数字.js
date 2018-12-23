/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 */
function MoreThanHalfNum_Solution(numbers)
{
  // write code here
  let left = 0, right = numbers.length - 1;
  let key = partition(numbers, left, right);
  let mid = numbers.length >> 1;
  while(key !== mid) {
    if(key > mid) {
      key = partition(numbers, left, key - 1);
    } else {
      key = partition(numbers, key + 1, right);
    }
  }
  let res = numbers[mid];
  if(!checkMoreThanHalf(numbers, res)) {
    res = 0;
  }
  return res;
}

function partition(a, left, right) {
  let key = a[left];
  while(left < right) {
    while (key <= a[right] && left < right) {
      right--;
    }
    [a[left], a[right]] = [a[right], a[left]];
    while (key >= a[left] && left < right) {
      left++;
    }
    [a[left], a[right]] = [a[right], a[left]];
  }
  return left;
}

// 根据数组特点找出
function MoreThanHalfNum_Solution(numbers)
{
  let res = numbers[0], times = 1;
  for(let i = 0; i < numbers.length; i ++) {
    if(times == 0) {
      res = numbers[i];
      times = 1;
    } else if (numbers[i] == res) {
      times ++;
    } else {
      times --;
    }
  }
  if(!checkMoreThanHalf(numbers, res)) {
    return 0;
  }
  return res;
}

function checkMoreThanHalf(numbers, num) {
  let times = 0;
  for(let i = 0; i < numbers.length; i ++) {
    if(num === numbers[i]) times++;
  }
  if(times * 2 <= numbers.length) return false;
  return true;
}

// 快排
function quickSort(a, left, right) {
  if(left === right) return;
  let key = partition(a, left, right);
  if(left < key) {
    quickSort(a, left, key - 1);
  } 
  if(key < right) {
    quickSort(a, key + 1, right);
  }
}
let a = [2,4,1,3,5];
// 寻找第K大的数字
function findKmax(a, k) {
  let left = 0, right = a.length - 1;
  let key = partition(a, left, right);
  let len = a.length - key;
  while(len != k) {
    if(len > k) {
      key = partition(a, key + 1, right);
    } else {
      key = partition(a, left, key - 1);
    }
    len = a.length - key;
  }
  return a[key];
}
// console.log(quickSort(a, 0, 4));
// console.log(findKmax(a, 2))
let b = [1,2,3,2,2,2,5,4,2];
console.log(MoreThanHalfNum_Solution(b));