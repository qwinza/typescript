"use strict";
describe('Object Type', function () {
    it('should use object type', function () {
        let person = {
            id: "1",
            name: "Faris Ahmad",
        };
        console.log(person);
        person.id = "2";
        person.name = "Faris";
        console.info(person);
    });
});
