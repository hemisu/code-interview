/*
请实现一个函数，用来判断一颗二叉树是不是对称的。
注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
*/
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function isSymmetrical(pRoot)
{
  // write code here
  if(!pRoot) return true;
  return compareRoot(pRoot.left, pRoot.right);
}

function compareRoot(left, right) {
  if(left === null) {
    return right === null;
  }
  if(right === null) {
    return false;
  }
  if(left.val !== right.val) {
    return false;
  }
  return compareRoot(left.left, right.right)
    && compareRoot(left.right, right.left);
}
