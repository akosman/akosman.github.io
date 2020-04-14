var playerWon = 0;
var playerLost = 0;
var compWon = 0;
var compLost = 0;
var draw = 0;

var playerWon_span = document.getElementById("player-won");
var playerLost_span = document.getElementById("player-lost");
var compWon_span = document.getElementById("comp-won");
var compLost_span = document.getElementById("comp-lost");
var draw_span = document.getElementById("draw");
var scores_div = document.querySelector(".scores");
var result_div = document.querySelector(".result");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");

function GetCompChoice(){
    var choices = ["rock", "paper", "scissors"];
    var randNum = Math.round(Math.random() * 3);
    return choices[randNum];
}

function Translate(word){
    switch (word){
        case "rock":
            return "kő";
        case "paper":
            return "papír";
        case "scissors":
            return "olló";
    }
}

function PlayerWin(compChoice){
    playerWon++;
    playerWon_span.innerHTML = playerWon;
    compLost++;
    compLost_span.innerHTML = compLost;
    result_div.innerHTML = "Nyertél! A gép a következőt választotta: " + Translate(compChoice); 
}
function PlayerLose(compChoice){
    playerLost++;
    playerLost_span.innerHTML = playerLost;
    compWon++;
    compLost_span.innerHTML = compLost;
    result_div.innerHTML = "Vesztettél :( A gép a következőt választotta: " + Translate(compChoice); 
}
function Draw(compChoice){
    draw++;
    draw_span.innerHTML = draw++;
    result_div.innerHTML = "Döntetlen. A gép a következőt választotta: " + Translate(compChoice); 
}
function PlayGame(playerChoice){
    var compChoice = GetCompChoice();
    switch(playerChoice + compChoice){
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            PlayerWin(compChoice);
            break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            PlayerLose(compChoice);
            break;
        case "scissorsscirssors":
        case "paperpaper":
        case "rockrock":
            Draw(compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        PlayGame("rock");
    })

    paper_div.addEventListener('click', function () {
        PlayGame("paper");
    })

    scissors_div.addEventListener('click', function () {
        PlayGame("scissors");
    });
}

main();