/*
给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
*/
function TreeLinkNode(x){
  this.val = x;
  this.left = null;
  this.right = null;
  this.next = null;
}
/*
 画图
 1.该节点有右子树，则它的下一个节点就是右子树的最左边的节点
 2.该节点没有右子树
  2.1 该节点是它父节点的左子树，返回父节点；
  2.2 该节点是它父节点的右子树，那只能沿着往上找，直到它成为父节点的左子树的根节点，并且返回父节点；
*/
function GetNext(pNode)
{
  // write code here
  if(!pNode) return null;
  // 1.
  if(pNode.right) {
    pNode = pNode.right;
    while(pNode.left) {
      pNode = pNode.left;
    }
    return pNode;
  }
  // 2.
  while(pNode.next) {
    if(pNode === pNode.next.left) {
      return pNode.next;
    }
    pNode = pNode.next;
  }
  return null;
}