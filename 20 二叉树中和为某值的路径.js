/*
输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
(注意: 在返回值的list中，数组长度大的数组靠前)
 */
function FindPath(root, expectNumber)
{
  // write code here
  let list = [], listAll = [];
  return findPath(
    root,
    expectNumber,
    list,
    listAll
  );
}
function findPath(
  root,
  expectNumber,
  list,
  listAll
) {
  if(root === null) return listAll;
  list.push(root.val);
  const isLeaf = root.left === null && root.right === null;
  const remain = expectNumber - root.val;
  if(isLeaf && remain === 0){
    listAll.push([...list]);
  }

  findPath(root.left, remain, list, listAll);
  findPath(root.right, remain, list, listAll);
  list.pop();
  return listAll;
}