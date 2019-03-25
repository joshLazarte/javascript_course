/*
Game Function:
 - Player must guess a number between min and max
 - Player get certain amount of guesses
 - Notify player of guesses remaining
 - Notify player of correct answer if they lost
 - Let player choose to play again
*/


//Game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;
    
//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
//assign ui min and max

minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

//listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    
    //validate input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please Enter a Number Between ${min} and ${max}`, 'red');
    }
    
    //check if won
    if(guess === winningNum){
        gameOver(true, `${winningNum} Is Correct! YOU WIN!!!`);
    } else {
        //wrong number
        guessesLeft -= 1;
        
        if(guessesLeft === 0){
            //Game Over- lost
           gameOver(false, `Game Over, You Lost. The Correct Number was ${winningNum}`);
        } else {
            //game continues - answer wrong
            setMessage(`${guess} is Not Correct. ${guessesLeft} Guesses Left`, 'red');
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            
        }
    }
});

//Game over function
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable input
    guessInput.disabled = true;
    //make border green
    guessInput.style.borderColor = color;
    //display winning message
    setMessage(msg, color);
    
    //play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
};

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
};

function getRandomNum(min, max){
    // return Math.floor(Math.random() * (max + 1));
    return Math.floor(Math.random() * (max - min + 1) + min);
};