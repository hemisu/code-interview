/*
在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
*/
function ListNode(x){
  this.val = x;
  this.next = null;
}
function deleteDuplication(pHead)
{
  // write code here
  if(!pHead) return null;
  let Head = new ListNode(0);
  Head.next = pHead;
  let pre = Head;
  let cur = Head.next;
  while(cur) {
    if(cur.next && cur.val === cur.next.val) {
      // 找到最后的一个相同节点
      while(cur.next && cur.val === cur.next.val) {
        cur = cur.next;
      }
      pre.next = cur.next;
      cur = cur.next;
    } else {
      cur = cur.next;
      pre = pre.next;
    }
  }
  return Head.next;
}

var arr = [1,2,3,3,4,4,5];
let list = arr.reduceRight((pre, cur) => {
  let node2 = new ListNode(cur);
  if(pre instanceof ListNode) {
    node2.next = pre;
    return node2;
  }
  let node1 = new ListNode(pre);
  node2.next = node1;
  return node2;
})

let res = deleteDuplication(list);
function print(p) {
  while(p) {
    if(p.val) console.log(p.val)
    p = p.next;
  }
}
print(res)