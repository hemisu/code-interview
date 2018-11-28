/**
 * 题目描述
给定一个double类型的浮点数base和int类型的整数exponent。
求base的exponent次方。
 */

// 第一种解答
function Power(base, exponent)
{
  // write code here
  if(base === 0) return 0;
  if(exponent === 0) return 1;
  if(exponent > 0) return base**exponent;
  return 1 / (base ** (- exponent));
}

// 第二种
function Power(base, exponent) {
  if(base === 0) return 0;
  if(exponent === 0) return 1;
  if(exponent > 0) return PowerUseRecursion(base, exponent);
  return 1 / PowerUseRecursion(base, -exponent);
}
function PowerUseRecursion(base, exponent) {
  if(exponent === 0) return 1;
  if(exponent === 1) return base;
  let result = PowerUseRecursion(base, exponent >> 1);
  result *= result;
  if(exponent & 1 === 1) { // 是奇数
    result *= base;
  }
  return result;
}

console.log(Power(2,-2))