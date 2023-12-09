"use strict";
describe('Union', function () {
    it('should support in typescript', function () {
        let sample = "Faris";
        console.info(sample);
        sample = 100;
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it('should support in typescript', function () {
        function process(values) {
            if (typeof values === 'string') {
                return values.toUpperCase();
            }
            else if (typeof values === 'number') {
                return values + 2;
            }
            else {
                return !values;
            }
            expect(process('faris')).toBe('FARIS');
            expect(process(2)).toBe(4);
            expect(process(true)).toBe(false);
        }
    });
});
