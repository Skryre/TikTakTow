const contain = document.querySelectorAll(".key");
const title = document.querySelector("h3");
const reset = document.querySelector("button")
const boardGrid = document.querySelector(".board")

const settings = (() => {

    board = Array(9).fill('');
    let currentPlayer = 'X';
    let round = 0;

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

    function checkWin (currentPlayer) {
        return winConditions.some(combination => {
            return combination.every(index => {
            return board[index] === currentPlayer
            })
        })}

    return {board, currentPlayer, round, checkWin};

})();

const gameController = (() => {

    contain.forEach((element) =>
    element.addEventListener("click", (e) => {
        if (e.target.textContent !== "") return;
            settings.board[e.target.dataset.index] = settings.currentPlayer;
            element.innerHTML = settings.currentPlayer
            settings.round++
        if(settings.round === 9){
            return title.innerHTML = "Draw!!"
        }
        else if(settings.checkWin(settings.currentPlayer)){
            return title.innerHTML = "WINNNNNNNN!!"
        }
        else{
            changeState () 
        }
    }));

    function changeState () {
        settings.currentPlayer = settings.currentPlayer === 'X' ? 'O' : 'X'
    }

})();

const display = (() =>{
    reset.addEventListener(`click`, () => {
        resetButton()
    });

    function resetButton (){
        contain.forEach( function(element){
            element.innerHTML = '';
        });
        boardGrid.classList.remove('x')
        settings.board = Array(9).fill('');
        settings.currentPlayer = 'X';
        settings.round = 0;
        title.innerHTML = "Player X's turn";
    }
})()