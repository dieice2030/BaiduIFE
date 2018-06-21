var hello=document.getElementById('hello');
var hobby=document.getElementById('hobby');

hello.onclick=function(){
    console.log('你好，我是dieice2030');
    alert("记得打开开发者工具哦！");
}
hobby.onclick=function(){
    console.log('我喜欢搓炉石、打LOL，最近刚拿到竞技场12胜钥匙呢^_^');
    alert("记得打开开发者工具哦！");
}

window.onload=function(){
    var date=new Date();
    var now=date.getHours();
    if(now>=0 && now<5)
        alert("凌晨好！");
    else if(now>=5 && now <11)
        alert("早上好！");
    else if(now>=11 && now<13)
        alert("中午好！");
    else if(now>=13 && now<18)
        alert("下午好！");
    else
        alert("晚上好！");
}