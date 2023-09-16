var a = document.getElementById('center');
var b = document.getElementById('on');
var c = document.getElementById('off');

function On() {
    a.style.backgroundColor = 'rgb(221, 175, 25)';
    b.style.backgroundColor = 'green';
    c.style.backgroundColor = 'rgb(66, 60, 60)';
    a.style.boxShadow = ' 0px 0px 30px rgb(231, 235, 45,0.6)';
}

function Off() {
    a.style.backgroundColor = 'rgb(66, 60, 60)';
    b.style.backgroundColor = 'rgb(66, 60, 60)';
    c.style.backgroundColor = 'green';
    a.style.boxShadow = 'none';
}