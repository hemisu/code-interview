/**
 * 题目描述
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */
const rotateArray = [3, 4, 5, 1, 2];
const rotateArray2 = [1, 0, 1, 1, 1];

// 常规遍历解法，O(N)
// function minNumberInRotateArray(rotateArray)
// {
//   if (rotateArray === null || rotateArray.length === 0) return 0;
//   const len = rotateArray.length - 1;
//   for(let i = 0; i < len; i++) {
//     if(rotateArray[i] > rotateArray[i + 1]) return rotateArray[i + 1];
//   }
//   return rotateArray[0];
// }

// 二分法
/**
  * 使用二分法 会有rotateArray2这种情况出现 所以p, q, mid相等时还是需要用遍历的方法
*/
function findInOrder(rotateArray) {
  if (rotateArray === null || rotateArray.length === 0) return 0;
  const len = rotateArray.length - 1;
  for(let i = 0; i < len; i++) {
    if(rotateArray[i] > rotateArray[i + 1]) return rotateArray[i + 1];
  }
  return rotateArray[0];
}

function minNumberInRotateArray(rotateArray)
{
  // write code here
  if (rotateArray === null || rotateArray.length === 0) return 0;
  let p, q;
  for(p = 0, q = rotateArray.length - 1; p !== q - 1;) {
    const mid = p + (q - p)/2>>0;
    if(rotateArray[mid] === rotateArray[p] && rotateArray[mid] === rotateArray[q]) {
      return findInOrder(rotateArray);
    }
    if (rotateArray[p] <= rotateArray[mid]) {
      p = mid;
      continue;
    } else if (rotateArray[q] > rotateArray[mid]) {
      q = mid;
      continue;
    }
    break;
  }
  return rotateArray[q];
}

console.log(minNumberInRotateArray(rotateArray2));