const contain = document.querySelectorAll(".key");
const title = document.querySelector("h3");
const reset = document.querySelector("button")
const boardGrid = document.querySelector(".board")
const displayUpdate = document.querySelector(".winning-message")

const settings = (() => {

    let board = Array(9).fill('');
    let currentPlayer = 'X';

    function reset () {
        board = Array(9).fill('');
        currentPlayer = 'X';
    }

    function getcurrent (){
        return currentPlayer
    }

    function changeState () {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    }

    function addSign (index){
        board[index] = currentPlayer
    }

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
    function call () {
        console.log(board, currentPlayer)
    }

    return {reset, checkWin, changeState, addSign, getcurrent, call};

})();

const gameController = (() => {

    let round = 0

    function roundincrement (){
        round++
    }

    reset.addEventListener(`click`, () => {
        resetButton()
    });

    function resetButton (){
        contain.forEach( function(element){
            element.innerHTML = '';
        });
        settings.reset()
        round = 0
    }

    contain.forEach((element) =>
    element.addEventListener("click", (e) => {
        if (e.target.textContent !== "") return;
            settings.addSign(e.target.dataset.index);
            element.innerHTML = settings.getcurrent()
            roundincrement ()
            settings.call ()
        if(round === 9){
            return title.innerHTML = "Draw!!"
        }
        else if(settings.checkWin(settings.getcurrent())){
            title.innerHTML="win!!!!!!!"
        }
        else{
            settings.changeState()
            title.innerHTML=settings.getcurrent()
        }
    }));

})();