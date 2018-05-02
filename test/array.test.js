const expect = require('chai').expect;
const util = require('../src/array');

describe('array', function () {
    describe('#indexOf(arr, val)', function () {
        it('should return -1 when the array is undefined', function () {
            const value = undefined;
            expect(util.indexOf(undefined, 1)).to.be.equal(-1);
        })

        it('should return -1 when the array does not contain val ', function () {
            expect(util.indexOf([1,2,3], 0)).to.be.equal(-1);
        })

        it('should return -1 when the val is undefined ', function () {
            expect(util.indexOf([1,2,3], undefined)).to.be.equal(-1);
        })

        it('should return index when the val is undefined and array contains undefined', function () {
            expect(util.indexOf([1,undefined,3], undefined)).to.be.equal(1);
        })

        it('should return index when the array contains val ', function () {
            expect(util.indexOf([1,2,3], 2)).to.be.equal(1);
        })
    })
})