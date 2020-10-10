// JavaScript source code
window.onload = function () {
    let square = document.querySelectorAll("#board div");
    for (let i = 0; i < square.length; i++) {
        square[i].classList.add('square');
    }
    console.log(square);
}