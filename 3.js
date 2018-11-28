/**
题目描述
输入某二叉树的前序遍历和中序遍历的结果，请重建出
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

利用递归的思想，前序遍历的第一个值为1，就是根节点的值；
拿着这个1去中序里找，发现4,7,2这3个数，即根节点的左子树；5,3,8,6这4个数即为根节点的右子树；
以此类推即可获得树的结构，注意边界条件为pre或者vin的长度为0时返回null即可。
 */
const pre = [1,2,4,7,3,5,6,8];
const vin = [4,7,2,1,5,3,8,6];

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function reConstructBinaryTree(pre, vin)
{
  // write code here
  if (pre.length === 0) return null;

  const node = new TreeNode(pre[0]);
  const vinIndex = vin.indexOf(pre[0]);
  node.left = reConstructBinaryTree(pre.slice(1, vinIndex + 1), vin.slice(0, vinIndex));
  node.right = reConstructBinaryTree(pre.slice(vinIndex + 1), vin.slice(vinIndex + 1));
  return node;
}

const result = reConstructBinaryTree(pre, vin);
console.log(result);