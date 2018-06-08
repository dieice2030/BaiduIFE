var button = document.getElementsByTagName('button');
var head = document.getElementsByTagName('head')[0];


function checkStyle(i, button) {
    var link = document.getElementsByTagName('link')[0];
    button[i].addEventListener('click', function () {
        link.removeAttribute('href')
        link.href = 'style_' + (i + 1) + '.css';
        
    });
}
for (var i = 0; i < button.length; i++) {
    checkStyle(i, button);
}