/**
 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 * @param {*} array
 */
function multiply(array)
{
  // write code here
  // 求出C[i] = A[0]*A[1]*...*A[i-1]
  // D[i] = A[i+1]*...*A[n-1]
  // B[i] = C[i-1]D[i+1]
  let C = [], D = [], n = array.length;
  C[0] = array[0]
  for(let i = 1; i < n; i++) {
    C[i] = C[i - 1] * array[i];
  }
  D[n - 1] = array[n - 1];
  for(let i = n - 2; i >= 0; i--) {
    D[i] = D[i + 1] * array[i];
  }
  let B = [];
  B[0] = D[1]
  B[n - 1] = C[n - 2];
  for(let i = 1; i < n - 1; i++) {
    B[i] = C[i - 1] * D[i + 1]
  }
  return B;
}
// 不需要CD的额外空间
function multiply(array)
{
  let B = [], n = array.length;
  // B暂时存储左边的A[0]~A[i-1]的值
  B[0] = 1;
  for(let i = 1; i < n; i ++) {
    B[i] = array[i - 1] * B[i - 1];
  }
  let tmp = 1;
  // 计算后N - i个元素的乘积并连接
  for (let i = n - 2; i >=0; i--) {
    tmp *= array[i + 1];
    B[i] *= tmp;
  }
  return B;
}