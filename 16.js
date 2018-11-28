/**
 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数
 （时间复杂度应为O（1））。
 */
let stack = [];
let minStack = [];
function push(node)
{
  // write code here
  stack.push(node);
  if(node <= minStack[minStack.length - 1]) minStack.push(node);
  else minStack.push(minStack[minStack.length - 1] || node);
}
function pop()
{
  minStack.pop();
  return stack.pop();
}
function top()
{
  return stack[stack.length - 1];
}
function min()
{
  return minStack[minStack.length - 1];
}