/*
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
*/
function VerifySquenceOfBST(sequence)
{
  if(sequence === null || sequence.length === 0) {
    return false;
  }
  const root = sequence[sequence.length - 1];
  let i, j;
  for(i = 0; i < sequence.length - 1; i++) {
    if(sequence[i] > root) break;
  }
  j = i;
  for(j = i; j < sequence.length - 1; j++) {
    if(sequence[j] < root) return false;
  }
  let left = true;
  if(i > 0)
    left = VerifySquenceOfBST(sequence.slice(0, i));
  let right = true;
  if(j < sequence.length - 1)
    right = VerifySquenceOfBST(sequence.slice(i, sequence.length - 1));
  
  return left && right;
}
