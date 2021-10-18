function computerPlay() {
    let computerMove = Math.floor(Math.random() * 3);
    console.log(computerMove);
    if (computerMove == 0) return 'rock';
    else if (computerMove == 1) return 'paper';
    else if (computerMove == 2) return 'scissors';
}
/*
function singleRound(playerSelection, computerSelection) {
    playerSelection = addEventListener('click');
    
    computerSelection = computerPlay();

}
*/
function pressRock() {
    document.getElementById('demoRock').textContent = 'YO!'
    let element = document.getElementById('buttonRock');
    element.className = (element.className == 'buttonClicked') ? 'buttonDefault' : 'buttonClicked';
}

function pressPaper() {
    document.getElementById('idPaper').setAttribute('style',' border: solid antiquewhite 9px');
    document.getElementById('demoPaper').textContent = 'YO!'
    document.getElementById('humanName').textContent = '1';
}

function pressScissors() {
    document.getElementById('demoScissors').textContent = 'a!'
}
