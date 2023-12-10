"use strict";
describe('Optional', function () {
    it('should support null and undefined', function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Faris");
        const name = undefined;
        console.info(null);
    });
});
