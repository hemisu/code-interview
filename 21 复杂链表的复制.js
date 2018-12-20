/*
输入一个复杂链表
（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
// 在同一条链上处理
function Clone(pHead)
{
  // write code here
  CloneNodes(pHead);
  ConnectSiblingNodes(pHead);
  return ReconnectNodes(pHead);
}
function CloneNodes(pHead) {
  let pNode = pHead;
  while(pNode) {
    const pClone = new RandomListNode();
    pClone.label = pNode.label;
    pClone.next = pNode.next;
    pClone.random = null;

    pNode.next = pClone;
    pNode = pClone.next;
  }
}

function ConnectSiblingNodes(pHead) {
  let pNode = pHead;
  while(pNode) {
    const pCloned = pNode.next;
    if(pNode.random) {
      pCloned.random = pNode.random.next;
    }
    pNode = pCloned.next;
  }
}

function ReconnectNodes(pHead) {
  let pNode = pHead;
  let pCloneHead = null;
  let pCloneNode = null;
  if(pNode) {
    pCloneHead = pCloneNode = pNode.next;
    pNode.next = pCloneNode.next;
    pNode = pNode.next;
  }
  while(pNode) {
    pCloneNode.next = pNode.next;
    pCloneNode = pCloneNode.next;
    pNode.next = pCloneNode.next;
    pNode = pNode.next;
  }
  return pCloneHead;
}

// 方法二 <S, S'>建立映射
function Clone(pHead)
{
  if(!pHead) {
    return null;
  }
  let map = new Map();
  let pCloneHead, p1, p2;
  p1 = pHead;
  p2 = new RandomListNode(pHead.label);
  pCloneHead = p2;
  map.set(p1, p2);
  while(p1) {
    if(p1.next) {
      p2.next = new RandomListNode(p1.next.label);
    } else {
      p2.next = null;
    }
    p1 = p1.next;
    p2 = p2.next;
    map.set(p1, p2);
  }
  // 复制完，再连接一次
  p1 = pHead;
  p2 = pCloneHead;
  while(p1) {
    p2.random = map.get(p1.random);
    p1 = p1.next;
    p2 = p2.next;
  }
  return pCloneHead;
}