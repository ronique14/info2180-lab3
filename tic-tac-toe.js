// JavaScript source code
window.onload = function () {
    const square = document.querySelectorAll("#board div");
    const winningMessage = () => document.querySelector("#status div") 
    const winningMessageElement = document.getElementById("winningMessage");
    const newGameButton = document.getElementsByClassName("btn");
   


    //let message = document.getElementById("#status");

    let currentPlayer = 'X';

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

    if (checkWin()) {
        endGame(false)
    } else (isDraw())
    {
        endGame(true)
    }

    //this.positions = Array.from(winningCombo);

     function checkWin () {
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

        winningCombo.forEach((winningCombo) => {
            const pos0InnerText = positions[winningCombo[0]].innerText;
            const pos1InnerText = positions[winningCombo[1]].innerText;
            const pos2InnerText = positions[winningCombo[2]].innerText;

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
         console.log(winner);
    }

    function endGame(draw) {
        if (draw) {
            winningMessageTextElement.innerText = 'Draw!'
        } else {
            winningMessageTextElement.innerText = $(currentplayer ? "Congratulations! X is the Winner!" : "Congratulations! O is the Winner!")
        }
        winningMessageElement.classList.add('show')
    }

    function isDraw() {
        return square.every(square => {
            return square.classList.contains('X') ||
                square.classList.contains('O');


        })
    }


    newGameButton.addEventListener('click', reset)

    function reset(){
        square.forEach(square => {
            square.classList.remove('X')
            square.classList.remove('O')
            square.removeEventListener('click', clickOutcome)
            winnigMessageElement.classList.remove('show')
        })
    }
}







     
