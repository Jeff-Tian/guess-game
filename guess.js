const assert = require('assert');

let count = function (trial, answer) {
    let a = 0;
    let b = 0;

    for (let i = 0; i < trial.length; i++) {
        let index = answer.indexOf(trial[i]);

        if (index >= 0) {
            index !== i ? b++ : a++;
            answer[index] = '_';
        }

    }
    
    return {a, b};
};

function guessTip(answer, trial) {
    answer = answer.split('');
    trial = trial.split('');

    let {a, b} = count(trial, answer);

    return `${a}A${b}B`;
}

describe('guess', function () {
    it('1. should print 0A0B', function () {
        let tip = guessTip('1234', '5678')
        assert.equal(tip, '0A0B');
    })

    it('2. should print 1A0B', function () {
        let tip = guessTip('1234', '1987')
        assert.equal(tip, '1A0B')
    })

    it('3. should print 0A1B', function () {
        let tip = guessTip('1234', '2897')
        assert.equal(tip, '0A1B')
    })

    it('4. should print 1A1B', function () {
        let tip = guessTip('5543', '5255')
        assert.equal(tip, '1A1B')
    })

    // =======================================
    // Below cases are not make code to fail

    it('5. should print 4A0B', function () {
        let tip = guessTip('5543', '5543')
        assert.equal(tip, '4A0B');
    })

    it('6. should print 0A4B', () => {
        let tip = guessTip('1234', '4321')
        assert.equal(tip, '0A4B');
    })

    it('7. should print 0A0B', () => {
        let tip = guessTip('12', '34')
        assert.equal(tip, '0A0B')
    })

    it('8. extreme case', () => {
        let tip = guessTip('12345678901234567890', '12345678901234567890')
        assert.equal(tip, '20A0B')
    })

    it('9. should print 1A1B', function () {
        let tip = guessTip('5255', '5543')
        assert.equal(tip, '1A1B')
    })
})