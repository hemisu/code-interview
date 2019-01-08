/*
地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
*/
function movingCount(threshold, rows, cols)
{
  // write code here
  let visited = [];
  for(let i = 0; i < rows; i++) {
    visited.push([]);
    for(let j = 0; j < cols; j++) {
      visited[i][j] = false;
    }
  }
  return movingCountCore(threshold, rows, cols, 0, 0, visited);
}
function movingCountCore(threshold, rows, cols, row, col, visited) {
  if(row < 0 || row === rows || col < 0 || col == cols || visited[row][col]){
    return 0;
  }
  const tmpStr = '' + row + col;
  let sum = 0;
  for(let k = 0; k < tmpStr.length; k++) {
    sum += ~~tmpStr.charAt(k)
  }
  if(sum > threshold) return 0;
  visited[row][col] = true;
  return 1 + movingCountCore(threshold, rows, cols, row + 1, col, visited)
    + movingCountCore(threshold, rows, cols, row - 1, col, visited)
    + movingCountCore(threshold, rows, cols, row, col + 1, visited)
    + movingCountCore(threshold, rows, cols, row, col - 1, visited)
}

const ret = movingCount(5, 2, 3);
