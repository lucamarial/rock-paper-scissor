let result_div = document.querySelector(".result");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissors_button = document.getElementById("s");


function computerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

const main = () => {
  rock_button.addEventListener('click', function() {
    RockPaperScissor("rock");
  })

  paper_button.addEventListener('click', function() {
    RockPaperScissor("paper");
  })

  scissors_button.addEventListener('click', function() {
    RockPaperScissor("scissor");
  })
}
console.log(main())

function win(user, computer) {
  result_div.innerHTML = `${user} beats ${computer}. You win!`
}

function lose(user, computer) {
  result_div.innerHTML = `${computer} beats ${user}. You lose!`
}


function RockPaperScissor(choiceOne) {
  const choiceTwo = computerChoice();
  
  if(choiceOne === choiceTwo){
  return result_div.innerHTML = "The result is a tie!"
  };
  
  if(choiceOne === 'rock'){
    if(choiceTwo === 'scissor'){
    return win(choiceOne, choiceTwo)
    }
    else{
      return lose(choiceOne, choiceTwo)
    }
  };

  if(choiceOne === 'paper'){
    if(choiceTwo === 'rock'){
      return win(choiceOne, choiceTwo)
    }
    else{
      return lose(choiceOne, choiceTwo)
    }
  };

  if(choiceOne === 'scissor'){
    if(choiceTwo === 'paper'){
      return win(choiceOne, choiceTwo)
    }
    else{
      return lose(choiceOne, choiceTwo)
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RockPaperScissor;
}