/**
 * 字符串的排列 (全排列)
 * ABC: 
 * A拿出来 在BC插空 
 * A _BC B_C BC_
 * B _AC A_C AC_
 * C _AB A_B AB_
 * @param {*} str 
 */
// 以下为插空法
function Permutation(str)
{
  // write code here
  if(str.length === 0) return [];
  if(str.length === 1) {
    return [str];
  }
  let result = [];
  let rest = Permutation(str.slice(1));
  for(let i = 0; i < rest.length; i ++) {
    for(let j = 0; j <= rest[i].length; j++) {
      const tmpStr = rest[i].slice(0, j) + str[0] + rest[i].slice(j);
      result.push(tmpStr);
    }
  }
  result = unique(result); // 去重
  result = result.sort(); // 字典序
  return unique(result);
}
function unique(arr) {
  let result = [];
  for(let v of arr) {
    !~result.indexOf(v) && result.push(v);
  }
  return result;
}

console.log(Permutation(''))
console.log(Permutation('a'))
console.log(Permutation('aa'))
console.log(Permutation('ab'))
console.log(Permutation('abc'))

// 回溯法
function Permutation(str) {
  let res = [];
  if(str.length <= 0) return res;
  let arr = str.split(''); // 字符串转化为字符数组
  res = permutate(arr, 0, res);
  res = [...new Set(res)];
  res.sort();
  return res;
}
function permutate(arr, index, res) {
  if(arr.length === index) {
    let s = '';
    for(let i = 0; i < arr.length; i++) {
      s += arr[i];
    }
    return res.push(s);
  }
  for(let i = index; i < arr.length; i++) {
    [arr[i], arr[index]] = [arr[index], arr[i]];
    permutate(arr, index + 1, res);
    [arr[i], arr[index]] = [arr[index], arr[i]]; 
  }
  return res;
}

console.log(Permutation(''))
console.log(Permutation('a'))
console.log(Permutation('aa'))
console.log(Permutation('ab'))
console.log(Permutation('abc'))

// 八皇后问题
function queen(len) {
  let res = [];
  let arr = Array.from({length: len}).map((v, i) => i);
  res = permutateQueen(arr, 0, res);
  res = [...new Set(res)];
  res.sort();
  return res;
}
function permutateQueen(arr, index, res) {
  if(arr.length === index) {
    let success = true;
    for(let i = 0; i < arr.length; i ++) {
      for(let j = i + 1; j < arr.length; j++) {
        if(Math.abs(i - j) - Math.abs(arr[i] - arr[j]) === 0) {
          success = false;
          break;
        }
      }
    }
    if(success) return res.push(arr.join(''));
  }
  for(let i = index; i < arr.length; i++ ) {
    [arr[i], arr[index]] = [arr[index], arr[i]];
    permutateQueen(arr, index + 1, res);
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return res;
}
console.log(queen(8).length);