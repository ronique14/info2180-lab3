// JavaScript source code
window.onload = function () {
    const square = document.querySelectorAll("#board div");
    const winningMessage = () => "Congratulations! ${currentPlayer} is the winner!";
    const drawMessage = () => "Game ended in a draw!";


    let message = document.getElementById("#status");

    let currentPlayer = 'X';
    let gameState = ["", "", "", "", "", "", "", "", ""];


    for (let i = 0; i < square.length; i++) {
        square[i].classList.add('square');


        for (let i = 0; i < square.length; i++) {
            square[i].addEventListener('mouseover', mouseOver)
            square[i].addEventListener('mouseout', mouseOut)


            function mouseOver() {
                square[i].classList.add('hover');
            }

            function mouseOut() {
                square[i].classList.remove('hover');
            }


        }
    }
    console.log(square);




    square.forEach(square => {
        square.addEventListener('click', clickOutcome, { once: true })
    })



    function clickOutcome(e) {
        const squareArray = Array.from(square);
        const index = squareArray.indexOf(e.target);
        square[index].textContent = currentPlayer;


        if (currentPlayer == 'X') {
            square[index].classList.add('X');
            currentPlayer = 'O';
        } else {
            square[index].classList.add('O');
            currentPlayer = 'X'
        }
        console.log(square[index]);

    }

    

    this.positions = Array.from(square);

    this.checkWin = function () {
        let winner = false;
        const winningCombo = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const positions = this.positions;

        winningCombo.forEach((combo) => {
            const pos0InnerText = positions[combo[0]].innerText;
            const pos1InnerText = positions[combo[1]].innerText;
            const pos2InnerText = positions[combo[2]].innerText;

            const isCombo = pos0InnerText != '' &&
                pos0InnerText === pos1InnerText &&
                pos1InnerText === pos2InnerText;


            if (isCombo) {
                winner = true;
                combo.forEach((index) => {
                    positions[index].ClassName += 'status';
                })
            }


        });

        return winner;

    }

}
  

