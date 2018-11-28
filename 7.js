/**
题目描述
输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
**/
/*
如果n右移不停的和1做&运算，如果是负数就会出现问题；
所以利用一个flag不停的左移，和n做&运算；
*/
// function NumberOf1(n)
// {
//   let count = 0;
//   let flag = 1;
//   while(flag) { // 停止条件，到32位时再左移，就会变0
//     if(n & flag) {
//       count += 1;
//     }
//     flag = flag << 1;
//   }
//   return count;
// }

/**
 * 上述的方法有一个缺点，如果是32位就会遍历32次
 * 
 * 1100 - 1 = 1011
 * 1100 & 1011 = 1000;
 * 这样就可以减少一位1，并且只操作1次
 */
function NumberOf1(n)
{
  let count = 0;
  while(n) { // 停止条件，到32位时再左移，就会变0
    count += 1;
    n = n & (n - 1);
  }
  return count;
}
console.log(NumberOf1(9))