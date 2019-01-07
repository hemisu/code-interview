/*
请实现两个函数，分别用来序列化和反序列化二叉树

序列化时候我们可以生成一个前序遍历序列和一个中序遍历序列，在反序列化时通过这两个序列重构出原二叉树。

这个思路有两个缺点就是：
　　1.如果二叉树有数值重复的节点，那么必须区分谁是前序遍历序列，谁是后序遍历序列。
　　2.只有当两个序列所有数据读出后才能开始反序列化。

*/
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
let arr = [];
function Serialize(pRoot)
{
  // write code here
  if(!pRoot) {
    arr.push('a');
  } else {
    arr.push(pRoot.val);
    Serialize(pRoot.left);
    Serialize(pRoot.right);
  }
}
function Deserialize(s)
{
  // write code here
  let node = null;
  if(arr.length < 1) {
    return null;
  }
  let number = arr.shift();
  if(typeof number === 'number') {
    node = new TreeNode(number);
    node.left = Deserialize();
    node.right = Deserialize();
  }
  return node;
}