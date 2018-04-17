const expect = require('chai').expect;
const number = require('../src/number');

describe('number', function () {
    
    describe('#isNum(value)', function () {
        it('should return false when the value is undefined', function () {
            const value = undefined;
            expect(number.isNum(value)).to.be.false;
        })

        it('should return false when the value is string', function () {
            const value = '1';
            expect(number.isNum(value)).to.be.false;
        })

        it('should return false when the value is bool', function () {
            const value = true;
            expect(number.isNum(value)).to.be.false;
        })

        it('should return true when the value is number', function () {
            const value = 1;
            expect(number.isNum(value)).to.be.true;
        })
    })
})