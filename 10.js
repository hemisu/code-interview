/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */
// function ListNode(x){
//   this.val = x;
//   this.next = null;
// }
function FindKthToTail(head, k)
{
  if(head === null || k === 0) return null;
  let pA = head;
  let pB = head;
  for(let i = 0; i < k - 1; i++) {
    if(pA.next !== null) {
      pA = pA.next;
    } else {
      return null;
    }
  }
  while(pA.next !== null) {
    pA = pA.next;
    pB = pB.next;
  }
  return pB;
}