function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function RockPaperScissor(choiceOne, choiceTwo) {
  if(choiceOne === choiceTwo){
  return "The result is a tie!"
  };
  if(choiceOne === 'rock'){
    if(choiceTwo === 'scissor'){
    return "Rock wins!"
    }
    else{
      return "Paper wins!"
    }
  };

  if(choiceOne === 'paper'){
    if(choiceTwo === 'rock'){
      return "Paper wins!"
    }
    else{
      return "Scissor wins!"
    }
  };

  if(choiceOne === 'scissor'){
    if(choiceTwo === 'paper'){
      return "Scissor wins!"
    }
    else{
      return "Rock wins!"
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RockPaperScissor;
}