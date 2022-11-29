const contain = document.querySelectorAll(".key");
const title = document.querySelector("h3");
const reset = document.querySelector("button")
const boardGrid = document.querySelector(".board")
const displayUpdate = document.querySelector(".winning-message")

const settings = (() => {

    board = Array(9).fill('');
    let currentPlayer = 'X';
    let round = 0;


    const checkWin = (currentPlayer) => {
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
        console.log(settings.checkWin(settings.currentPlayer))
        if (e.target.textContent !== "") return;
            settings.board[e.target.dataset.index] = settings.currentPlayer;
            element.innerHTML = settings.currentPlayer
            settings.round++
        if(settings.round === 9){
            return title.innerHTML = "Draw!!"
        }
        else if(settings.checkWin(settings.currentPlayer)){
            display.text("WINNNNNNNN!!")
            displayUpdate.classList.add('show');
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
    const title = document.querySelector("h3");
    const reset = document.querySelector("button")

    function text (text){
        title.innerHTML=text
    }

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
        text("Player X's turn")
        displayUpdate.classList.remove('show');

    }
    return{text}
})()