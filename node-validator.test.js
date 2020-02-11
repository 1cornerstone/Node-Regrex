const nodeRegrex = require('../node-validator');

describe('test Input',()=>{

    it('should check noAlphanumeric', function () {
        expect(nodeRegrex.noAlphanumeric('John smith Kingsley')).toBe(true);
    });

    it('should check withAlphanumeric', function () {
        expect(nodeRegrex.withAlphanumeric(' $100 > $20' )).toBe(false);
    });
    it('should check isEmail', function () {
        expect(nodeRegrex.isEmail('loremipsum@mail.com')).toBe(true);
    });
    it('should check isPhone', function () {
        expect(nodeRegrex.isPhone('08100001111')).toBe(true);
    });

});