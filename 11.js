/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */
// function ListNode(x){
//   this.val = x;
//   this.next = null;
// }
/**
 * p q r
 * q.next = p
 * @param {*} pHead
 */
function ReverseList(pHead)
{
  // write code here
  if(pHead === null) return null;
  let pReverseHead = null;
  let pNode = pHead;
  let pPrev = null;
  while(pNode != null) {
    let pNext = pNode.next;
    if(pNext == null) {
      pReverseHead = pNode;
    }
    pNode.next = pPrev;

    pPrev = pNode;
    pNode = pNext;
  }
  return pReverseHead;
}