/*
从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
*/

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function Print(pRoot)
{
  // write code here
  let res = [];
  if(!pRoot) return res;
  let queue = [];
  let list = [];
  let last = pRoot;
  queue.push(pRoot);
  while(queue.length) {
    let tmp = queue.shift();
    list.push(tmp.val);
    if(tmp.left) queue.push(tmp.left);
    if(tmp.right) queue.push(tmp.right);
    if(last === tmp) {
      res.push(list);
      list = [];
      last = queue[queue.length - 1];
    }
  }
  return res;
}