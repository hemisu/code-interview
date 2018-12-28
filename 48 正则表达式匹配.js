
/**
 *请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 *
 * @param {*} s
 * @param {*} pattern
 */
// 利用原生API
function match(s, pattern)
{
  // write code here
  let regexp = new RegExp('^'+pattern+'$')
  return regexp.test(s);
}

function match(s, pattern) {
  if(s === null || pattern === null) return false;
  return matchCore(s, 0, pattern, 0);
}

function matchCore(s, is, pattern, ip) {
  if(s.length === is && pattern.length === ip) return true;
  if(s.length !== is && pattern.length === ip) return false;
  // 如果模式的第二位是*
  if(pattern[ip + 1] === '*') {
    if(pattern[ip] === '.' && s.length !== is) {
      // 模式为'.*' 且字符串没有结束
      return matchCore(s, is + 1, pattern, ip) // 匹配1、1+个
        || matchCore(s, is, pattern, ip + 2); // 匹配0个字符串
    }
    if(s[is] === pattern[ip]) { // 匹配到一样的
      return matchCore(s, is + 1, pattern, ip + 2) // 匹配完了
        || matchCore(s, is + 1, pattern, ip) // 匹配1、1+个
        || matchCore(s, is, pattern, ip + 2); // 匹配0个字符串
    }
    return matchCore(s, is, pattern, ip + 2); // 匹配到0个
  }
  if(s[is] === pattern[ip]) { // 匹配到一样
    return matchCore(s, is + 1, pattern, ip + 1);
  }
  if(pattern[ip] === '.' && s.length !== is) {
    return matchCore(s, is + 1, pattern, ip + 1);
  }
  return false;
}