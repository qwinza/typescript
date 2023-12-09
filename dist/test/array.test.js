"use strict";
describe('Array', function () {
    it('Should same with javascript', function () {
        const names = ["Faris", "Ahmad", "Shidiq"];
        const values = [1, 2, 3, 4];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', function () {
        const hobbies = ['Faris', 'Ahmad'];
        console.info(hobbies);
    });
    it('should support tuple', function () {
        const person = ["Faris", "Ahmad", 20];
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
