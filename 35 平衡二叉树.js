/**
输入一棵二叉树，判断该二叉树是否是平衡二叉树。
如果二叉树中任意结点的左右子树的深度不超过1，那么它就是一颗平衡二叉树。
*/
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
// 基于上一题的解答，每个节点会被遍历多次
function TreeDepth(pRoot)
{
  // write code here
  if(!pRoot) return 0;
  let left = TreeDepth(pRoot.left);
  let right = TreeDepth(pRoot.right);
  return left > right ? left + 1 : right + 1;
}
function IsBalanced_Solution(pRoot)
{
  // write code here
  if(!pRoot) return true;
  let left = TreeDepth(pRoot.left);
  let right = TreeDepth(pRoot.right);
  if(Math.abs(left - right) > 1) return false;

  return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}

// 后序遍历 每个节点判断一次
function IsBalanced_Solution(pRoot) {
  return TreeDepth(pRoot) !== -1;
}

function TreeDepth(pRoot) {
  if(!pRoot) return 0;
  let left = TreeDepth(pRoot.left);
  if(left === -1) return -1;
  let right = TreeDepth(pRoot.right);
  if(right === -1) return -1;

  return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
}
