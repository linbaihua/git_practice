
function setTable(){
    // 平稳退化
    if (!document.getElementsByTagName) {
        return false;
    }
    var tables=document.getElementsByTagName("table");
    // odd 用来设置true和false用来设置是奇数还是偶数行
    // rows 用来存储 tr数组
    var odd,rows;
    // 遍历 table 数组
    for (var i = 0; i < tables.length; i++) {
        /* 设置初始值是false，那么table.tr 第一个就不用改变样式，根据遍历 
        tr 中奇数行不变样式，偶数行改变样式*/
        odd=false
        rows=tables[i].getElementsByTagName("tr");
        // 遍历 tr 数组
        for (var j = 0; j < rows.length; j++) {
            if(odd==true){
                // rows[j].style.backgroundColor="#fcc";
                addClass(rows[j],"add");
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}

addLoadEvent(setTable);