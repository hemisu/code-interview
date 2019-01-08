/*
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。 例如
```
a b c e
s f c s
a d e e
```
这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
*/
// 采用DFS 回溯法
function hasPath(matrix, rows, cols, path)
{
  // write code here
  let visited = new Array(rows * cols).fill(false);
  let pathLength = 0;
  for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
      if(hasPathCore(matrix, rows, cols, row, col, visited, pathLength, path)) {
        return true;
      }
    }
  }
  return false;
}
function hasPathCore(matrix, rows, cols, row, col, visited, pathLength, path) {
  let findPath = false;
  if(pathLength === path.length) return true;
  if(
    row >= 0 && row < rows
    && col >= 0 && col <= cols
    && !visited[row * cols + col]
    && path[pathLength] === matrix[row * cols + col]
  ) {
    visited[row * cols + col] = true;
    findPath = hasPathCore(matrix, rows, cols, row + 1, col, visited, pathLength + 1, path)
      || hasPathCore(matrix, rows, cols, row - 1, col, visited, pathLength + 1, path)
      || hasPathCore(matrix, rows, cols, row, col + 1, visited, pathLength + 1, path)
      || hasPathCore(matrix, rows, cols, row, col - 1, visited, pathLength + 1, path);
      
    if(!findPath) {
      visited[row * cols + col] = false;
    }
  }
  return findPath;
}

const ret = hasPath([
  'a', 'b', 'c', 'e',
  's', 'f', 'c', 's',
  'a', 'd', 'e', 'e',
], 3, 4, 'bcced');
