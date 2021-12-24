
/* 函数时给每个tr都添加一个事件(鼠标放上去就可以识别) */
function highlightRow(){
    // 平稳退化
    if(!document.getElementsByTagName) return false;
    var rows=document.getElementsByTagName("tr");
    // 遍历tr数组
    for(var i=0; i<rows.length; i++){
        // 给每个tr添加事件
        rows[i].onmouseover=function(){
            this.style.fontWeight="bold";
        }
        rows[i].onmouseout=function(){
            this.style.fontWeight="normal";
        }
    }
}
addLoadEvent(highlightRow);