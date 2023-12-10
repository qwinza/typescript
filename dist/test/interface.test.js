describe('Interface', function () {
    it('should support Interface', function () {
        const seller = {
            id: 1,
            name: "peje",
            nib: "112121233",
            npwp: "202020"
        };
        seller.name = "faris";
        console.info(seller);
    });
    it('should support interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
    });
    it('should support indexable inteface', function () {
        const name = ["Faris", "Ahmad", "Shidiq"];
        console.info(name);
    });
    it('should support indexable interface for non number', function () {
        const dictionary = {
            name: "Faris",
            address: "Bandung"
        };
        expect(dictionary["name"]).toBe("Faris");
        expect(dictionary["address"]).toBe("Bandung");
    });
    it('should support interface extends', function () {
        const employee = {
            id: "1",
            name: "Faris",
            division: "Machine Learning"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Peje",
            division: "Manager",
            numberOfEmployees: 3
        };
        console.info(manager);
    });
    it('should support function interface', function () {
        const person = {
            name: "Faris Ahmad",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("peje"));
    });
    it('should support intersection type', function () {
        const domain = {
            name: "PJ",
            id: "1"
        };
        console.info(domain);
    });
});
export {};
