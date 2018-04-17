const expect = require('chai').expect;
const string = require('../src/string');

describe('string', function () {
    
    describe('#isString(value)', function () {
        it('should return false when the value is undefined', function () {
            const value = undefined;
            expect(string.isString(value)).to.be.false;
        })

        it('should return false when the value is number', function () {
            const value = 1;
            expect(string.isString(value)).to.be.false;
        })

        it('should return false when the value is bool', function () {
            const value = true;
            expect(string.isString(value)).to.be.false;
        })

        it('should return true when the value is empty string', function () {
            const value = '';
            expect(string.isString(value)).to.be.true;
        })

        it('should return true when the value is long string', function () {
            const value = 'sdfsadfasdcasdafefscsadfasdfsad';
            expect(string.isString(value)).to.be.true;
        })

        it('should return true when the value is array', function () {
            const value = ['sdfsadfasdcasdafefscsadfasdfsad'];
            expect(string.isString(value)).to.be.false;
        })
    })

    describe('#contains(source, value)', function () {
        it('should return false when the value is undefined', function () {
            const value = undefined;
            expect(string.contains('',value)).to.be.false;
        })

        it('should return false when the source is undefined', function () {
            const value = undefined;
            const source = undefined;
            expect(string.contains(source,value)).to.be.false;
        })

        it('should return true when the source&value is empty string', function () {
            const value = '';
            const source = '';
            expect(string.contains(source,value)).to.be.true;
        })

        it('should return false when the source is empty string & value is a', function () {
            const value = 'a';
            const source = '';
            expect(string.contains(source,value)).to.be.false;
        })

        it('should return true when the source is abc & value is a', function () {
            const value = 'a';
            const source = 'abc';
            expect(string.contains(source,value)).to.be.true;
        })
    })


    describe('#containsAny(source, ...value)', function () {
        it('should return false when the source is undefined', function () {
            expect(string.containsAny(undefined,'')).to.be.false;
        })

        it('should return false when the value is undefined', function () {
            expect(string.containsAny('',undefined)).to.be.false;
        })

        it('should return false when the value is muti undefined', function () {
            expect(string.containsAny('',undefined,undefined,undefined)).to.be.false;
        })

        it('should return false when the value does not contain', function () {
            expect(string.containsAny('asa',undefined,'d','aaa')).to.be.false;
        })

        it('should return true when the source contain value', function () {
            expect(string.containsAny('a21','1')).to.be.true;
        })

        it('should return true when the source contain different type value', function () {
            expect(string.containsAny('a21',1,)).to.be.true;
        })
    })

    describe('#containsAll(source, ...value)', function () {
        it('should return false when the source is undefined', function () {
            expect(string.containsAll(undefined,'')).to.be.false;
        })

        it('should return false when the source does not contain', function () {
            expect(string.containsAll('','','a')).to.be.false;
        })

        it('should return true when the source contain', function () {
            expect(string.containsAll('a','','a')).to.be.true;
        })
    })
})