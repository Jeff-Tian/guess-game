const assert = require('assert');

let countA = function (answer, trial) {
    let count = 0;

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === trial[i]) {
            count++;
            answer[i] = '_';
        }
    }
    return count;
};

let countB = function (trial, answer) {
    let count = 0;

    for (let j = 0; j < trial.length; j++) {
        let index = answer.indexOf(trial[j]);

        if (index >= 0 && index !== j) {
            count++;
            answer[index] = '_';
        }

    }
    return count;
};

function guessTip(answer, trial) {
    answer = answer.split('');
    trial = trial.split('');

    return `${countA(answer, trial)}A${countB(trial, answer)}B`;
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
})