
/* 函数作用是找到同级别的下一个节点并给他改变一些样式，就是通过js给HTML中的节点改变样式
不用直接在HTML中改变样式，表示层与行为层分开 */
function styleHelderSibling(){
    // 平稳退化
    if(!document.getElementsByTagName) return false;
    var helders=document.getElementsByTagName("h1");
    var elem;
    for (var i = 0; i < helders.length; i++) {
        elem=getNextSibling(helders[i].nextSibling);
        elem.style.fontWeight="bold";
        elem.style.fontSize="1.2em";
    }
}
// 函数用于找到用一级别节点的下一个节点
    function getNextSibling(node){
        // 元素节点就是1
        if(node.nodeType==1){
            return node;
        }
        // 因为有些节点与节点之间有看不见的空格之类的也是一个节点，所以可能不是要找的那个节点
        // 所以要继续找直到后面没有别的节点了返回null
        if (node.nextSibling) {
            return getNextSibling(node.nextSibling);
        }
        return null;
}

addLoadEvent(styleHelderSibling);