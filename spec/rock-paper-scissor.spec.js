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

})