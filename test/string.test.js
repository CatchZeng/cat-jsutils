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

    describe('#changeCase(source, caseType)', function () {
        it('should return undefined when the source is undefined', function () {
            expect(string.changeCase(undefined,string.CaseType.capitalize)).to.be.undefined;
        })

        it('should return \'\' when the source is \'\'', function () {
            expect(string.changeCase('',string.CaseType.capitalize)).to.be.equal('');
        })

        it('uppercaseFirst -- should return Mynameiscatch when the source is mynameIsCatch', function () {
            expect(string.changeCase('mynameIsCatch',string.CaseType.uppercaseFirst)).to.be.equal('Mynameiscatch');
        })

        it('uppercaseFirst -- should return Mynameiscatch when the source is MynameIscatch', function () {
            expect(string.changeCase('MynameIscatch',string.CaseType.uppercaseFirst)).to.be.equal('Mynameiscatch');
        })

        it('lowercaseFirst -- should return mYNAMEISCATCH when the source is MynameIsCatch', function () {
            expect(string.changeCase('MynameIsCatch',string.CaseType.lowercaseFirst)).to.be.equal('mYNAMEISCATCH');
        })

        it('lowercaseFirst -- should return mYNAMEISCATCH when the source is mynameIsCatch', function () {
            expect(string.changeCase('mynameIsCatch',string.CaseType.lowercaseFirst)).to.be.equal('mYNAMEISCATCH');
        })

        it('toggleCase -- should return mYNAMEiScATCH when the source is MynameIsCatch', function () {
            expect(string.changeCase('MynameIsCatch',string.CaseType.toggleCase)).to.be.equal('mYNAMEiScATCH');
        })

        it('toggleCase -- should return MYNAMEiScATCH when the source is mynameIsCatch', function () {
            expect(string.changeCase('mynameIsCatch',string.CaseType.toggleCase)).to.be.equal('MYNAMEiScATCH');
        })

        it('toggleCase -- should return mYNAMEiScATCH when the source is MynameIsCatch', function () {
            expect(string.changeCase('MynameIsCatch',string.CaseType.toggleCase)).to.be.equal('mYNAMEiScATCH');
        })

        it('toggleCase -- should return mYNAMEiS123cATCH when the source is MynameIs123Catch', function () {
            expect(string.changeCase('MynameIs123Catch',string.CaseType.toggleCase)).to.be.equal('mYNAMEiS123cATCH');
        })

        it('uppercaseAll -- should return MYNAMEISCATCH when the source is mynameIsCatch', function () {
            expect(string.changeCase('mynameIsCatch',string.CaseType.uppercaseAll)).to.be.equal('MYNAMEISCATCH');
        })

        it('uppercaseAll -- should return MYNAMEISCATCH when the source is MynameIsCatch', function () {
            expect(string.changeCase('MynameIsCatch',string.CaseType.uppercaseAll)).to.be.equal('MYNAMEISCATCH');
        })

        it('lowercaseAll -- should return mynameiscatch when the source is mynameIsCatch', function () {
            expect(string.changeCase('mynameIsCatch',string.CaseType.lowercaseAll)).to.be.equal('mynameiscatch');
        })

        it('lowercaseAll -- should return mynameiscatch when the source is MynameIsCatch', function () {
            expect(string.changeCase('MynameIsCatch',string.CaseType.lowercaseAll)).to.be.equal('mynameiscatch');
        })

        it('unknown CaseType -- should return MynameIsCatch when the source is MynameIsCatch', function () {
            expect(string.changeCase('MynameIsCatch',8)).to.be.equal('MynameIsCatch');
        })
    })

    describe('#genUUID(len, radix)', function () {
        it('should return 000 when the len is 3 and radix is 1', function () {
            expect(string.genUUID(3,1)).to.be.equal('000')
        })

        it('uuid length should be 36 when the len is undefined', function () {
            expect(string.genUUID(undefined,1).length).to.be.equal(36)
        })

        it('uuid length should be 36 when the len is undefined', function () {
            expect(string.genUUID(3,undefined).length).to.be.equal(3)
        })
    })
})