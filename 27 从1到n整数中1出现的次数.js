/**
 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
 但是对于后面问题他就没辙了。
 ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。
 */
// 暴力破解
function numberOf1(number) {
  let cnt = 0;
  while(number) {
    if(number % 10 === 1) {
      cnt += 1;
    }
    number = ~~(number / 10);
  }
  return cnt;
}
function NumberOf1Between1AndN_Solution(n)
{
  // write code here
  let cnt = 0;
  for(let i = 1; i <= n; i++) {
    cnt += numberOf1(i);
  }
  return cnt;
}
/**
 * 划分为0，1 和大于等于2的情况
 * https://leetcode.com/problems/number-of-digit-one/discuss/64381/4-lines-olog-n-cjavapython
 * 
 * @param {*} n 
 */
function NumberOf1Between1AndN_Solution(n) {
  let ones = 0;
  for(let m = 1; m <= n; m *= 10) {
    const a = ~~(n / m), b = ~~(n % m);
    ones += ~~((a + 8) / 10) * m + (a % 10 === 1) * (b + 1);
  }
  return ones;
}

console.log(NumberOf1Between1AndN_Solution(13))