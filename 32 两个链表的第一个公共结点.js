/**
 输入两个链表，找出它们的第一个公共结点。
 */
function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindFirstCommonNode(pHead1, pHead2)
{
  // write code here
  let len1 = getLengthOfLength(pHead1);
  let len2 = getLengthOfLength(pHead2);

  let pLong = pHead1;
  let pShort = pHead2;
  let lenDiff = len1 - len2;
  if(len2 > len1) {
    pLong = pHead2;
    pShort = pHead1;
    lenDiff = len2 - len1;
  }
  while(lenDiff--) {
    pLong = pLong.next;
  }
  while(pLong) {
    if(pLong.val == pShort.val) return pLong;
    pLong = pLong.next;
    pShort = pShort.next;
  }

  return null;
}
function getLengthOfLength(pHead) {
  let cnt = 0, pNode = pHead;
  while(pNode) {
    cnt += 1;
    pNode = pNode.next;
  }
  return cnt;
}