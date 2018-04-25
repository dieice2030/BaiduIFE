var text=document.getElementById('text');
var btn=document.getElementById('btn');
var line_left=document.getElementById('line-left');
var line_right=document.getElementById('line-right');
var textStyle=text.style;
var lineLStyle=line_left.style;
var lineRStyle=line_right.style;


btn.onclick=function (){
    if(btn.getAttribute("active")!=null){ //激活状态
        btn.removeAttribute("active");//点击变为非激活状态
        // 字体变换部分
        textStyle.color="black";//字体变为黑色
        textStyle.transitionProperty="color";
        textStyle.transitionDuration="0.5s";

        // 线条变换部分
        lineRStyle.width="0";
        lineRStyle.transitionProperty="width";
        lineRStyle.transitionDuration="1s";
        lineLStyle.width="0";
        lineLStyle.transitionProperty="width";
        lineLStyle.transitionDuration="1s";
    }
    else{//非激活状态
        btn.setAttribute("active","");//点击变为激活状态
        // 字体变换部分
        textStyle.color="#1C86EE";//字体变为蓝色
        textStyle.transitionProperty="color";
        textStyle.transitionDuration="0.5s";

        // 线条变换部分
        lineRStyle.width="55px";
        lineRStyle.transitionProperty="width";
        lineRStyle.transitionDuration="1s";
        lineLStyle.width="55px";
        lineLStyle.transitionProperty="width";
        lineLStyle.transitionDuration="1s";
    }
}