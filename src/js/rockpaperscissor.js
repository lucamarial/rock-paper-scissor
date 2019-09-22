function RockPaperScissor(choiceOne, choiceTwo) {
  if(choiceOne === choiceTwo){
  return "The result is a tie!"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RockPaperScissor;
}