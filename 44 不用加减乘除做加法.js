/*
写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
*/
// 先考虑不进位的相加 num1 ^ num2; 在考虑进位(num1 & num2) << 1
function Add(num1, num2)
{
  // write code here
  while(num2 !== 0) {
    let temp = num1^num2; // 不考虑进位的+
    num2 = (num1&num2) << 1; // 所有位数考虑进位
    num1 = temp;
  }
  return num1;
}
/**
 * 7 + 5
 * 111 + 101
 * 
 * temp = 111 ^ 101 = 010 (2)
 * 考虑进位num2 = (111 & 101) << 1 = (101) << 1 = 1010 (10)
 * num1 = 010;
 * 
 * temp = 010 ^ 1010 = 1000 (8)
 * num2 = (010 & 1010) << 1 = (0010) << 1 = 100 (4)
 * num1 = 1000
 * 
 * temp = 1000 ^ 100 = 1100 (12)
 * num2不再需要进位
 * num1 = temp 返回
 */