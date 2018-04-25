var text=document.getElementById('text');
var btn=document.getElementById('btn');
var line_left=document.getElementById('line-left');
var line_right=document.getElementById('line-right');
var textStyle=text.style;
var lineLStyle=line_left.style;
var lineRStyle=line_right.style;


btn.onclick=function (){

    if(btn.getAttribute("active")!=null){ //说明已经是选中状态
        btn.removeAttribute("active");
        textStyle.color="black";
        textStyle.transitionProperty="color,text-decoration";
        textStyle.transitionDuration="0.5s";
        lineRStyle.width="0";
        lineRStyle.transitionProperty="width";
        lineRStyle.transitionDuration="1s";
        lineLStyle.width="0";
        lineLStyle.transitionProperty="width";
        lineLStyle.transitionDuration="1s";
    }
    else{
        btn.setAttribute("active","");
        textStyle.color="#1C86EE";
        textStyle.transitionProperty="color,text-decoration";
        textStyle.transitionDuration="0.5s";
        lineRStyle.width="55px";
        lineRStyle.transitionProperty="width";
        lineRStyle.transitionDuration="1s";
        lineLStyle.width="55px";
        lineLStyle.transitionProperty="width";
        lineLStyle.transitionDuration="1s";
    }

}