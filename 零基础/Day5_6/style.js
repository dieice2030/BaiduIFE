var button = document.getElementsByTagName('button');
var head = document.getElementsByTagName('head')[0];


function checkStyle(i, button) {
    var link = document.getElementsByTagName('link')[0];
    var newLink = document.createElement('link');
    button[i].addEventListener('click', function () {
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = 'style_' + (i + 1) + '.css';
        
    });
}
for (var i = 0; i < button.length; i++) {
    checkStyle(i, button);
}