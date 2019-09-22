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
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RockPaperScissor;
}