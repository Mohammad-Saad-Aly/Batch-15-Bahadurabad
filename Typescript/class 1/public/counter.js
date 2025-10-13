"use strict";
var incBtn = document.getElementById('inc');
var decBtn = document.getElementById('dec');
var num = document.getElementById('num');
var count = 0;
function counter(clickOn) {
    if (clickOn == 'plus') {
        count++;
        num.innerText = count.toString();
    }
    if (clickOn == 'minus') {
        count--;
        num.innerText = count.toString();
    }
}
incBtn.addEventListener('click', function () { counter('plus'); });
decBtn.addEventListener('click', function () { counter('minus'); });
