const contain = document.querySelectorAll(".key");
const title = document.querySelector("h3");
const reset = document.querySelector(".button")

const settings = (() => {

    create = [1,2,3,4,5,6,7,8,9];
    let currentPlayer = 'X';
    let round = 0;

    reset.addEventListener(`click`, () => {
        contain.forEach( function(element){
            element.innerHTML = '';
        });
        settings.create = [1,2,3,4,5,6,7,8,9];
        settings.currentPlayer = 'X';
        settings.round = 0;
        title.innerHTML = "Player X's turn"
    });

    return {create, currentPlayer, round}
})();

const player = (type, score ) => {
    return {type, score}
}

gameController = (() => {
    
    
    
    return {}
})

contain.forEach( function(element){
    element.addEventListener(`click`, (e) => {     
        if (element.innerHTML === 'X' || element.innerHTML === 'O'){return}
        settings.create[e.target.dataset.index] = settings.currentPlayer;
        element.innerHTML = settings.currentPlayer
        settings.round++;
        if (
            (settings.create[0] === settings.create[1] && settings.create[1] === settings.create[2])||
            (settings.create[3] === settings.create[4] && settings.create[4] === settings.create[5])||
            (settings.create[6] === settings.create[7] && settings.create[7] === settings.create[8])||
            (settings.create[0] === settings.create[3] && settings.create[3] === settings.create[6])||
            (settings.create[1] === settings.create[4] && settings.create[4] === settings.create[7])||
            (settings.create[2] === settings.create[5] && settings.create[5] === settings.create[8])||
            (settings.create[0] === settings.create[4] && settings.create[4] === settings.create[8])||
            (settings.create[2] === settings.create[4] && settings.create[4] === settings.create[6])
            ){
                title.innerHTML=settings.currentPlayer+" Player won";
            }
        else if (settings.round ===9 ) {
            title.innerHTML="It is a Draw!"
        }
        else {
        settings.currentPlayer = settings.currentPlayer === 'X' ? 'O' : 'X';
        console.log(settings.round, e.target.dataset.index, settings.create)
        title.innerHTML = "Player "+settings.currentPlayer+"'s turn"
        }
    });
});

