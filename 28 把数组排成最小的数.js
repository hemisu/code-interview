/**
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 */
// 定义了新的排序规则，把前一个数和后一个数拼接起来，比较字典序，然后组合为字符串
function PrintMinNumber(numbers)
{
  // write code here
  numbers.sort((a, b) => {
    return '' + a + b > '' + b + a;
  });

  return numbers.reduce((pre, cur) => pre + cur, '');
}
console.log(PrintMinNumber([3,32,321]));