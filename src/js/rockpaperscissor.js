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
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RockPaperScissor;
}