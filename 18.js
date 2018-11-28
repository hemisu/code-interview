/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
  // write code here
  const queue = [];
  const result = [];
  if(root == null) return result;
  queue.push(root);
  while(queue.length) {
    const node = queue.shift();
    result.push(node.val);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return result;
}