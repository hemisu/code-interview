/**

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
例如，如果输入如下4 X 4矩阵： 
1   2   3   4
5   6   7   8
9   10  11  12
13  14  15  16 
则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */
function printMatrix(matrix)
{
  if(matrix === null) return;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let start = 0;
  let res = [];
  while(rows > start * 2 && cols > start * 2) {
    res = [...res, ...printCircle(matrix, rows, cols, start)]
    start += 1;
  }
  return res;
}

function printCircle(matrix, rows, cols, start) {
  let endY = rows - 1 - start;
  let endX = cols - 1 - start;
  let result = []
  // 从左到右打印一行
  for(let i = start; i <= endX; i ++) {
    result.push(matrix[start][i])
  }
  // 从上到下打印一列
  if(start < endY) {
    for(let i = start + 1; i <= endY; i ++) {
      result.push(matrix[i][endX])
    }
  }
  // 从右到左打印一列
  if(start < endX && start < endY) {
    for(let i = endX - 1; i >= start; i --) {
      result.push(matrix[endY][i]);
    }
  }
  // 从下到上打印一列
  if(start < endX && start < endY - 1) {
    for(let i = endY - 1; i >= start + 1; i --) {
      result.push(matrix[i][start])
    }
  }
  return result;
}

console.log(printMatrix([[1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]]))