let img = document.querySelector('img');

img.onclick = function(){
    let mySrc = img.getAttribute('src');
    var num = Number(mySrc[10]) % 4 + 1;
    if(mySrc !== 'images/2B/4.jpg') {
        img.setAttribute('src', 'images/2B/' + num + '.jpg');
    } else{
        img.setAttribute('src', 'images/2B/' + num + '.gif');
    }
}

