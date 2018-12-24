/**
 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 例如6、8都是丑数，但14不是，因为它包含质因子7。
 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */
/**
 * 利用动态规划的思想，把之前的丑数保存，生成后面的丑数。
 * t2,t3,t5是判断点，用于判断何处开始选出并且乘以对应因子肯定会大于当前数组中最大的丑数，而前面的丑数不用考虑
 * 
 * 例如:
 * t2就是记录这个数T2，T2之前的每一个丑数乘以2都会小于已有的最大丑数。当每次算出min之后，如果是T2*2的值 就更新这个t2的指向；
 * 
 * @param {*} index 
 */
function GetUglyNumber_Solution(index)
{
  // write code here
  if(index <= 0) return 0;
  let res = [];
  res[0] = 1;
  let t2 = 0, t3 = 0, t5 = 0;
  for(let i = 1; i < index; i ++) {
    res[i] = Math.min(res[t2] * 2, res[t3] * 3, res[t5] * 5);
    if(res[i] === res[t2] * 2) t2++;
    if(res[i] === res[t3] * 3) t3++;
    if(res[i] === res[t5] * 5) t5++;
  }
  return res[index - 1];
}

console.log(GetUglyNumber_Solution(5))