describe('Type Data Any', function () {
    it('should to use type data any', function () {

        const person: any = {
            id: 1,
            name: "Faris Ahmad",
            age: 20,
        }

        person.age = 31;
        person.addres = "Indonesia"
        console.info(person);
    })
})