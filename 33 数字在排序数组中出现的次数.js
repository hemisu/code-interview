/**
  统计一个数字在排序数组中出现的次数。
  [1,2,3,3,3,3,4,5] 3
  4
*/
function GetNumberOfK(data, k)
{
  // write code here
  if(!data || data.length <= 0) return 0;
  let number = 0;
  let first = findFirstK(data, k, 0, data.length - 1);
  let last = findLastK(data, k, 0, data.length - 1);
  if(first > -1 && last > -1) {
    number = last - first + 1;
  }
  return number;
}
function findFirstK(data, k, start, end) {
  if(start > end) return -1;

  let midIndex = (end + start) >> 1;
  let midData = data[midIndex];
  if(midData === k) {
    if(midIndex > 0 && data[midIndex - 1] !== k || midIndex === 0) {
      return midIndex;
    } else {
      end = midIndex - 1;
    }
  } else if (midData > k) {
    end = midIndex - 1;
  } else {
    start = midIndex + 1;
  }

  return findFirstK(data, k, start, end);
}
function findLastK(data, k, start, end) {
  if(start > end) return -1;

  let midIndex = (end + start) >> 1;
  let midData = data[midIndex];
  if(midData === k) {
    if(midIndex < data.length - 1 && data[midIndex + 1] !== k || midIndex === data.length - 1) {
      return midIndex;
    } else {
      start = midIndex + 1;
    }
  } else if (midData > k) {
    end = midIndex - 1;
  } else {
    start = midIndex + 1;
  }

  return findLastK(data, k, start, end);
}

const arr = [1,2,3,3,3,3,4,5];
let a = GetNumberOfK(arr, 3);
