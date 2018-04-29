var showing = document.getElementById('showing');
var bar = document.getElementById('bar');
var pre = document.getElementById('pre');

var style = document.styleSheets[document.styleSheets.length - 1];

for (i = 1; i <= 5; i++) {
    var newLi = document.createElement('li');
    var newImage = document.createElement('img');
    newImage.setAttribute('src', i + ".jpg");
    newLi.appendChild(newImage);
    bar.firstElementChild.appendChild(newLi);
}

bar.onclick = function (e) {
    var num = e.target.getAttribute('src');
    var now = document.createElement('div');
    now.style.backgroundImage = 'url(' + num + ')';
    // now.style.animation = 'test' + num[0] + ' 1s';
    switch (num[0]) {
        case '1':
            now.style.animation = 'test' + num[0] + ' 1s ease-out';
            break;
        case '2':
            now.style.animation = 'test' + num[0] + ' 1s ease-out';
            break;
        case '3':
            now.style.animation = 'test' + num[0] + ' 1s ease-in'
            break;
        case '4':
            now.style.animation = 'test' + num[0] + ' 1s ease-out'
            break;
        case '5':
            now.style.animation = 'test' + num[0] + ' 2s ease-in-out'
            break;

    }
    showing.appendChild(now);
    if (showing.childNodes.length > 2) {
        showing.removeChild(showing.firstChild);
    }
}