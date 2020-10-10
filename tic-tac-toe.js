// JavaScript source code
window.onload = function () {
    const square = document.querySelectorAll("#board div");
   
    let currentPlayer = 'X';
    for (let i = 0; i < square.length; i++) {
        square[i].classList.add('square');
    }
    console.log(square);


    square.forEach(square => {
        square.addEventListener('click', clickOutcome, { once: true })
       
    })


function clickOutcome(e) {
   const squareArray = Array.from(square);
    const index = squareArray.indexOf(e.target);
    square[index].innerHTML = currentPlayer;
    

    if (currentPlayer == 'X') {
        square[index].classList.add('X');
        currentPlayer = 'O';
    } else {
     square[index].classList.add('O');
    currentPlayer = 'X'}
    console.log(index);
    
 }
}