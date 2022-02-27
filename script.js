var recs = document.getElementById('recommendations');
var tbr = document.getElementById('tbr');
var link = document.getElementById('link');
var rb = document.getElementById('rb');
var tb = document.getElementById('tb');
var lb = document.getElementById('lb');

function showRec() {
    recs.style.display = 'block';
    tbr.style.display = 'none';
    link.style.display = 'none';
    rb.style.borderColor = 'white';
    rb.style.backgroundColor = 'rgb(85, 65, 9)';
    rb.style.color = 'white';
    tb.style.borderColor = 'rgb(85, 65, 9)';
    tb.style.backgroundColor = 'white';
    tb.style.color = 'rgb(85, 65, 9)';
    lb.style.borderColor = 'rgb(85, 65, 9)';
    lb.style.backgroundColor = 'white';
    lb.style.color = 'rgb(85, 65, 9)';
}

function showTBR() {
    tbr.style.display = 'block';
    recs.style.display = 'none';
    link.style.display = 'none';
    tb.style.borderColor = 'white';
    tb.style.backgroundColor = 'rgb(85, 65, 9)';
    tb.style.color = 'white';
    rb.style.borderColor = 'rgb(85, 65, 9)';
    rb.style.backgroundColor = 'white';
    rb.style.color = 'rgb(85, 65, 9)';
    lb.style.borderColor = 'rgb(85, 65, 9)';
    lb.style.backgroundColor = 'white';
    lb.style.color = 'rgb(85, 65, 9)';
}

function showLink() {
    link.style.display = 'block';
    tbr.style.display = 'none';
    recs.style.display = 'none';
    lb.style.borderColor = 'white';
    lb.style.backgroundColor = 'rgb(85, 65, 9)';
    lb.style.color = 'white';
    rb.style.borderColor = 'rgb(85, 65, 9)';
    rb.style.backgroundColor = 'white';
    rb.style.color = 'rgb(85, 65, 9)';
    tb.style.borderColor = 'rgb(85, 65, 9)';
    tb.style.backgroundColor = 'white';
    tb.style.color = 'rgb(85, 65, 9)';
}