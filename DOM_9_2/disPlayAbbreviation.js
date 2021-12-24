
// 函数作用：把所有 abbr 的 title 集中起来显示在一个列表中
function displayAbbreviation(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.createTextNode) return false;
    if(!document.createElement) return false;
    // 得到所有的 abar 节点
    var abbreviation=document.getElementsByTagName("abbr");
    // 如果没有 abbr 就返回 false
    if (abbreviation.length<1) {
        return false;
    }
    // 定义一个数组赋值给 defs，defs 现在是一个数组
    var defs=new Array();
    // 遍历 abbr ,将 abbr 的文本节点值存储在一个数组中，数组以abbr的title为下标，类似于id标记
    // 遍历 abbr 节点数组
    // 得到每个 abbr 得 title 属性，赋值给 definition
    // 得到每个 abbr 的 文本节点的值 nodevalue, 赋值给 key
    // 将 definition 存储到数组 defs 中，数组下标是 key（数组下标可以是字符串，不必要是数值）
    for (var i = 0; i < abbreviation.length; i++) {
        if (abbreviation[i].childNodes.length<1) {
            continue;
        }
            var definition=abbreviation[i].getAttribute("title");
            var key=abbreviation[i].lastChild.nodeValue;
            defs[key]=definition;        
    }
    // 创建一个列表-dlist
    var dlist=document.createElement("dl");
    // 将数组 defs 中的值 赋值给 key
    // 数组 defs 下标是 key，数组中的值依次赋值给 definition
    // 创建节点 dt，赋值给 dtitle
    // 创建文本节点 key, 赋值给 dtitle_text
    // 文本节点 Key(dtitle_text) 添加到节点 dtitle（dt) 中
    // 创建节点 dd，赋值给ddesc
    // 创建文本节点 definition,赋值给 ddesc_text
    // 文本节点 ddesc_text(definition) 添加到 ddesc(dd)
    // 文本节点 dtitle(key) 添加到 dlist(dl)
    // dd 节点 ddesc 添加到 dl节点 dlist
    for(key in defs){
        var definition=defs[key];
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length<1) {
        return false;
    }
    var header=document.createElement("h2");
    var header_text=document.createTextNode("abbreviations");
    header.appendChild(header_text);
    // document.getElementById("body")[0].appendChild(header);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviation);