const {isNumber,isEmail,noAlphanumeric,withAlphanumeric,isPhone}= require('./node-validator');

describe('test Input',()=>{

    it('should check noAlphanumeric', function () {
        expect(noAlphanumeric('John smith Kingsley')).toBe(true);
    });

    it('should check withAlphanumeric', function () {
        expect(withAlphanumeric(' $100 > $20' )).toBe(false);
    });
    it('should check isEmail', function () {
        expect(isEmail('loremipsum@mail.com')).toBe(true);
    });
    it('should check isPhone', function () {
        expect(isPhone('08100001111')).toBe(true);
    });

 it('should check isNumber', function () {
        expect(isNumber('402')).toBe(true);
    });

});