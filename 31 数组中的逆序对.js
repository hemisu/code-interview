/**
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

输入：题目保证输入的数组中没有的相同的数字

数据范围：

对于%50的数据,size<=10^4
对于%75的数据,size<=10^5
对于%100的数据,size<=2*10^5
 */
/**
 * 需要考虑到将数组不断拆分成为两份，比如
 * [7 5 6 4]
 * [7 5] [6 4]
 * [7] [5] [6] [4]
 * 
 * 7和5是一对逆序对，合并后排序，并且count+1，变为[5 7]
 * 6和4是一对逆序对，合并后排序并且count+1,变成[4 6]
 * 
 * [5 7] [4 6]
 *    p     q
 * copy = [7]
 * 接下来p和q指向各自的最后一位，
 * 如果p的值大于q的值，则将p存入，同时计数q之前的个数count += 2,
 * @param {*} data 
 */
function InversePairs(data)
{
  // write code here
  if(!data || data.length < 2) return 0;
  let copy = data.slice(0), count = 0;
  count = mergeCount(data, copy, 0, data.length - 1);
  return count % 1000000007;
}
// data copy
function mergeCount(data, copy, start, end) {
  if(start === end) return 0;
  let mid = (end - start) >> 1;
  let left = mergeCount(copy, data, start, start + mid); // 处理完这部分 data[start, start+mid]会变
  let right = mergeCount(copy, data, start + mid + 1, end); // 处理完这部分 data[start+mid+1, end]会变
  let [p, q, count, copyIndex] = [start + mid, end, 0, end];

  while(p >= start && q >= start + mid + 1) {
    if(data[p] > data[q]) {
      copy[copyIndex--] = data[p--];
      count += q - (start + mid + 1) + 1;
    } else {
      copy[copyIndex--] = data[q--];
    }
  }
  while(p >= start) {
    copy[copyIndex--] = data[p--]
  }
  while(q >= start + mid + 1) {
    copy[copyIndex--] = data[q--];
  }
  return count + left + right;
}

InversePairs([7,5,6,4])