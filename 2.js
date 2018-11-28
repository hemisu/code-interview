/*
  题目描述
  输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
  function ListNode(x){
    this.val = x;
    this.next = null;
  }
*/
function ListNode(x){
  this.val = x;
  this.next = null;
}
var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

function printListFromTailToHead(head) {
  // write code here
  const stack = [];
  let node = head;
  while (node !== null) {
    stack.push(node.val);
    node = node.next;
  }
  return stack.reverse();
}

printListFromTailToHead(node1)
