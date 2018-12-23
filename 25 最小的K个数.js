/**
 * 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 */
// 利用快排思想
function partition(a, left, right) {
  let key = a[left];
  while(left < right) {
    while (left < right && key <= a[right]) {
      right--;
    }
    [a[left], a[right]] = [a[right], a[left]];
    while (left < right && key >= a[left]) {
      left++;
    }
    [a[left], a[right]] = [a[right], a[left]];
  }
  return left;
}
function GetLeastNumbers_Solution(input, k)
{
  // write code here
  if(input.length === 0 || k > input.length || k < 1) return [];
  let left = 0, right = input.length - 1;
  let key = partition(input, left, right);
  let res = [];
  while(key != k - 1) {
    if (key > k - 1) {
      key = partition(input, left, key - 1);
    } else {
      key = partition(input, key + 1, right);
    }
  }
  res = input.slice(0, key + 1).sort();
  return res;
}

// 最小堆 排序
function shiftUp(array, index, maxSize) {
  var iMax, iLeft, iRight;
  while(true) {
    iMax = index;
    iLeft = index * 2 + 1;
    iRight = (index + 1) * 2;
    if(iLeft < maxSize && array[iLeft] < array[index]){
      iMax = iLeft;
    }
    if(iRight < maxSize && array[iRight] < array[iMax]) {
      iMax = iRight;
    }
    if(iMax != index) {
      [array[iMax], array[index]] = [array[index], array[iMax]];
    } else {
      break;
    }
  }
}
function buildMinHeap(array) {
  for(let i = (array.length >> 1) - 1; i >= 0; i--) {
    shiftUp(array, i, array.length);
  }
}

function sort(array) {
  buildMinHeap(array);
  for(let i = array.length - 1; i > 0 ; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    shiftUp(array, 0, i);
  }
  return array;
}
function GetLeastNumbers_Solution(input, k)
{
  // write code here
  if(input.length === 0 || k > input.length || k < 1) return [];
  buildMinHeap(input);
  const restNum = input.length - k;
  for(let i = input.length - 1; i >= restNum ; i--) {
    [input[0], input[i]] = [input[i], input[0]];
    shiftUp(input, 0, i);
  }
  return input.slice(restNum).sort();
}

console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8], 4))