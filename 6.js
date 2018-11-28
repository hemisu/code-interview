/**
 * 题目描述
  大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
  n<=39
 */

// 版本1 容易超时无法通过
function Fibonacci1(n)
{
  // write code here
  if(n <= 0) return 0;
  if(n === 1) return 1;
  return Fibonacci(n-1) + Fibonacci(n-2);
}

// 版本2
function Fibonacci2(n)
{
  // write code here
  if(n <= 0) return 0;
  if(n === 1) return 1;
  let fibNLeft = 0;
  let fibNRight = 1;
  let fibN = 0;
  for(let i = 2; i <= n; i++) {
    fibN = fibNLeft + fibNRight;

    fibNLeft = fibNRight;
    fibNRight = fibN;
  }
  return fibN;
}



console.log(Fibonacci2(5))