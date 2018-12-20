/*
二叉搜索树与双向链表

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
要求不能创建任何新的结点，只能调整树中结点指针的指向。
*/
/*
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
} 
*/
function Convert(pRootOfTree) {
  // write code here
  if(!pRootOfTree) return null;
  let pLastNodeInList = null;
  pLastNodeInList = ConvertTreeNode(pRootOfTree, pLastNodeInList);
  let pHeadOfList = pLastNodeInList;
  while(pHeadOfList && pHeadOfList.left) {
    pHeadOfList = pHeadOfList.left
  }
  return pHeadOfList;
}
function ConvertTreeNode(pNode, pLastNodeInList) {
  if(!pNode) return;
  let pCurrent = pNode;

  if(pCurrent.left) {
    pLastNodeInList = ConvertTreeNode(pCurrent.left, pLastNodeInList);
  }
  pCurrent.left = pLastNodeInList;
  if(pLastNodeInList) {
    pLastNodeInList.right = pCurrent;
  }
  pLastNodeInList = pCurrent;
  if(pCurrent.right) {
    pLastNodeInList = ConvertTreeNode(pCurrent.right, pLastNodeInList);
  }
  return pLastNodeInList;
}