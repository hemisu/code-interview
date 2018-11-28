/**
 * 题3 在一个二维数组中， 每一行都按照从左到右递增的顺序排序， 每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数， 输入这样的一个二维数组和一个整数， 判断数组中是否含有该整数。
 * 
 * 要注意从左下角或者右上角进行剔除，因为如果从左上角开始：1小于7，那么7应该在1的下方或者右方，无法剔除1所在的行或者列；右下角开始也同理；
 * 但是如果从右上角开始，首先9大于7，可以知道7在9的左侧，因此剔除右侧列，j--；
 * 8大于7，同理j--；
 * 2小于7,7只可能在下方，所以i++;
 * 
 */
var arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
];

function Find(target, array) {
  let col = array[0].length - 1;
  let i, j;
  for (i = 0, j = col; i < array.length && j >= 0; ) {
    if (array[i][j] === target) {
        return true;
    } else if (array[i][j] > target) {
        j--;
        continue;
    } else if (array[i][j] < target) {
        i++;
        continue;
    }
  }
  return false;
}

console.log(Find(7, arr))

// 左下角版本
// function Find(target, array)
// {
//     let rowCount = array.length - 1;
//     let i, j;
//     for(i = rowCount, j = 0; i >= 0 && j < array[i].length;) {
//         if(target === array[i][j]) {
//             return true;
//         } else if(target > array[i][j]) {
//             j++;
//             continue;
//         } else if(target < array[i][j]) {
//             i--;
//             continue;
//         }
//     }
//     return false;
// }
