/*
将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。
输入描述:
输入一个字符串,包括数字字母符号,可以为空
输出描述:
如果是合法的数值表达则返回该数字，否则返回0
*/
function StrToInt(str)
{
  // write code here
  if(!str || str.length === 0) return 0;
  let negative = 1;
  let res = 0;
  if(str[0] === '-') negative = -1;
  for(let i = (isNum(str[0])) ? 0 : 1 ;i < str.length; i++) {
    if(!isNum(str[i])) return 0;
    res = res * 10 + (str[i] - '0')
  }
  return res * negative;
}
function isNum(num) {
  return num >='0' && num <= '9';
}

let a = StrToInt('12345');
let b = StrToInt('-12122');