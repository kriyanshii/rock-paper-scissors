let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Sissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();

    result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} beats ${converToWord(computerChoice)}${smallCompWord}. You Win!`; 
}

function lost(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();

    result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} loses to ${converToWord(computerChoice)}${smallCompWord}. You Lose!`;
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} equals to ${converToWord(computerChoice)}${smallCompWord}. You Lose!`;
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(computerChoice + userChoice){
        case 'ps':
        case 'rp':
        case 'sr':
            win(userChoice, computerChoice);
            break;
        case 'sp':
        case 'pr':
        case 'rs':
            lost(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
        
    }   
}

function main(){
    rock_div.addEventListener("click", function(){
        game('r');
    })

    paper_div.addEventListener("click", function(){
        game('p');
    })

    sissors_div.addEventListener("click", function(){
        game('s');
    })
}

main();