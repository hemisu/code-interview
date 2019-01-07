/*
如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。
*/
/**
 * 一直保持数据的有序，插入一个排序一个
 * 需要注意的是数组是0-based
 */
const array = [];
function Insert(num)
{
  // write code here
  array.push(num);
  for(let i = array.length - 2; num < array[i]; i--) {
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
  }
}
function GetMedian(){
  // write code here
  if(array.length & 1 === 1) {
    return array[(array.length-1)/2]
  } else {
    return (array[(array.length)/2] + array[(array.length)/2-1])/2;
  }
}