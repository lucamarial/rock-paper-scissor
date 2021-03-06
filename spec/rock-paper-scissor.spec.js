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
    
    it('should return rock wins', () => {
        expect(RockPaperScissor('rock', 'scissor')).to.eql('Rock wins!')
    })

    it('should return paper wins', () => {
        expect(RockPaperScissor('rock', 'paper')).to.eql('Paper wins!')
    })

    it('should return paper wins', () => {
        expect(RockPaperScissor('paper', 'rock')).to.eql('Paper wins!')
    })

    it('should return scissor wins', () => {
        expect(RockPaperScissor('paper', 'scissor')).to.eql('Scissor wins!')
    })

    it('should return scissor wins', () => {
        expect(RockPaperScissor('scissor', 'paper')).to.eql('Scissor wins!')
    })

    it('should return rock wins', () => {
        expect(RockPaperScissor('scissor', 'rock'))
    })

})