
const choices = [
    
        "✊🏻",
        "🖐🏻",
        "✌🏻"

];


const getComputerChoice = function () {
    const ChoicesIndex = Math.floor(Math.random()*choices.length);
    return choices[ChoicesIndex];

    };


let humanWins = 0; 
let computerWins = 0;


//Decide winner of each round

    function Winner (humanChoice, computerChoice) {
        
    if (humanChoice === computerChoice) {
        alert("its a tie, you lucky");
    }else if (
        (humanChoice === "✊🏻" && computerChoice == "✌🏻") ||
        
        (humanChoice == "✌🏻" && computerChoice == "🖐🏻") ||
        
        (humanChoice == "🖐🏻" && computerChoice == "✊🏻") 
    ) {
        humanWins++;
        alert(`Wow, you won this round, ${humanChoice} beats ${computerChoice}. Your score is ${humanWins}, compupter score is ${computerWins}`);
        
    } else {
        computerWins++;
        alert (`you lost! Haha, ${computerChoice} beats ${humanChoice}. Your score is ${humanWins}, computer score is ${computerWins}`);
    }
    };


    //EventListeners:
    const Rock = document.getElementById("Rock");
    const Paper = document.getElementById("Paper");
    const Scissors = document.getElementById("Scissors");


    //Game starts
        Rock.addEventListener('click', function() {
           
            const humanChoice = '✊🏻';
            const computerChoice = getComputerChoice();
            Winner(humanChoice, computerChoice);
            finalWinner();
            
        });
        
        Paper.addEventListener('click', function() {
            const humanChoice = '🖐🏻';
            const computerChoice = getComputerChoice();
            Winner(humanChoice, computerChoice);
            finalWinner();
            
        });
        
        Scissors.addEventListener('click', function() {
            const humanChoice = '✌🏻';
            const computerChoice = getComputerChoice();
            Winner(humanChoice, computerChoice);
            finalWinner();
        });


    

    //decide final winner
    function finalWinner () {
    if (humanWins === 3) {
        alert("Yay!! You won the game against AI");
    
        
    }else if (computerWins === 3) {
        alert("on No!! AI has won, we are all fudged");

    }
}

 












