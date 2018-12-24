/**
在一个字符串(0<=字符串长度<=10000，全部由字母组成)
中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
*/
function FirstNotRepeatingChar(str)
{
  // write code here
  for(let i = 0; i < str.length; i ++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) return i;
  }
  return -1;
}

function FirstNotRepeatingChar(str)
{
  // write code here
  let map = new Map();
  for(let i = 0; i < str.length; i++) {
    if(map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1)
    } else {
      map.set(str[i], 1);
    }
  }
  for(let i = 0; i < str.length; i++) {
    if(map.get(str[i]) === 1) return i;
  }
  return -1;
}
console.log(FirstNotRepeatingChar('google'))