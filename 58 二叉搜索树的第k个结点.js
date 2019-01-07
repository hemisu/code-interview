/*
给定一棵二叉搜索树，请找出其中的第k小的结点。
例如（5，3，7，2，4，6，8）中，按结点数值大小顺序第三小结点的值为4。
*/
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
/*
想要通过 需要形成一个闭包保存index 不能在KthNode外面设置全局变量

思路：
由于是二叉搜索树，中序遍历即为递增序列；
进行中序遍历，如果根节点为null，则返回null表示没有找到值。
如果在左子树找到了，就一直返回找到的节点；
在匹配条件之前计数+1，如果符合计数条件，返回当时的根节点；
如果在右子树找到了，就一直返回找到的节点。
*/
function KthNode(pRoot, k)
{
  let index = 0;
  // write code here
  function KthNodeCore(root, k) {
    if(root !== null) {
      let node = KthNodeCore(root.left, k);
      if(node !== null) return node;
      index++;
      if(k === index) return root;
      node = KthNodeCore(root.right, k);
      if(node !== null) return node;
    }
    return null;
  }
  return KthNodeCore(pRoot, k);
}

let root = new TreeNode(8)
root.left = new TreeNode(6)
root.right = new TreeNode(10)
root.left.left = new TreeNode(5)
root.left.right = new TreeNode(7)
root.right.left = new TreeNode(9)
root.right.right = new TreeNode(11)

const a = KthNode(root, 1);
