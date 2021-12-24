/* 函数作用是给 css添加样式 */
function addClass(element,value){
    if (!element.value) {
        element.className=value;
    }else{
        newClassName=element.value;
        newClassName +=" ";
        newClassName +=value;
        element.className=newClassName;
    }
}