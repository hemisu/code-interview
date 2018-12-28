/**
在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
 */
// 利用API做
function duplicate(numbers, duplication)
{
  // write code here
  //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  //函数返回True/False
  for(let i = 0; i < numbers.length; i ++) {
    const lastIndex = numbers.lastIndexOf(numbers[i]);
    if(lastIndex > -1 && lastIndex !== i){
      duplication[0] = numbers[i];
      return true;
    } 
  }
  return false;
}
// 利用map做
function duplicate(numbers, duplication)
{
  let map = new Map();
  for(let i = 0; i < numbers.length; i ++) {
    if(map.get(numbers[i]) === 1) {
      duplication[0] = numbers[i];
      return true;
    }
    map.set(numbers[i], (map.get(numbers[i]) || 0) + 1)
  }
  return false;
}

// 利用题目中的数组中的值只有0~n-1
/**

> 我们可以这样做，通俗来讲，就是把数组中的每个值放到对应的下标的位置上。（数归其标）
把当前序列当成是一个下标和下标对应值是相同的数组；
遍历数组，判断当前位的值和下标是否相等：
 2.1. 若相等，则遍历下一位； 
 2.2. 若不等，则将当前位置i上的元素和a[i]位置上的元素比较：若它们相等，则成功，即找到了重复的值！若不等，则将它们两交换。换完之后a[i]位置上的值和它的下标是对应的，但i位置上的元素和下标并不一定对应；
 重复2.2的操作，直到当前位置i的值也为i，将i向后移一位，再重复2.

 */
function duplicate(numbers, duplication)
{
  for(let i = 0; i < numbers.length; i ++) {
    while(i !== numbers[i]) {
      if(numbers[i] === numbers[numbers[i]]) {
        duplication[0] = numbers[i]
        return true;
      }
      const indexToExchange = numbers[i];
      [numbers[i], numbers[indexToExchange]] = [numbers[indexToExchange], numbers[i]]
      // 这里需要注意 如果写成
      // [numbers[i], numbers[numbers[i]] = [numbers[numbers[i]], numbers[i]]
      // 解构赋值是从左到右赋值的，而且这里是引用类型
      // 会使numbers[i]首先变为numbers [numbers[i]], 这样numbers[numbers[i]]获得的值就不是最初的numbers[i]上的值了
    }
  }
  return false;
}
let duplication = [];
let a = duplicate([2,1,3,1,4], duplication);
