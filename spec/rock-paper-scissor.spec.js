require('../spec.helper')

describe('Rock-Paper-Scissor Game', () => {
    let rockPaperScissor = new RockPaperScissor

    describe('smoke tests', () => {
        it('should exist', () => {
            expect(RockPaperScissor).to.exist;
        })

        it('should be a function', () => {
            expect(RockPaperScissor).to.be.a('function');
        })
    })

    it('should return tie', () => {
        expect(RockPaperScissor('rock', 'rock')).to.eql('The result is a tie!')
    })

})