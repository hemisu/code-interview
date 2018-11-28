/** 
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 * 
 * 利用两个栈 分别记为s1 s2
 * 入栈的时候都压入s1 出栈时，如果s2不为空，则pop s2，若s2为空， 则把s1内所有的值都弹出压入s2
 */
var inStack = [];
var outStack = [];
function push(node)
{
    // write code here
    inStack.push(node);
}
function pop()
{
    // write code here
    if (outStack.length <= 0) {
        while (inStack.length) {
            outStack.push(inStack.pop())
        }
    }
    return outStack.pop();
}