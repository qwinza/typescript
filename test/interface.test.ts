import { Employee, Manager } from "../src/employee";
import { sayHello } from "../src/say-hello";
import { Seller } from "../src/seller"

describe('Interface', function() {
    it('should support Interface', function() {

        const seller: Seller = {
            id: 1,
            name: "peje",
            nib: "112121233",
            npwp: "202020"
        };

        seller.name = "faris"

        console.info(seller);  
    });

    it('should support interface', function() {

        interface AddFunction {
            (value1: number, value2: number) : number
        }

        const add: AddFunction = (value1: number, value2: number) : number => {
            return value1 + value2
        }

        expect(add(1, 2)).toBe(3)
    });

    it('should support indexable inteface', function() {
        interface Indexable {
            [index: number] : string
        }
         
        const name: Indexable = ["Faris", "Ahmad", "Shidiq"]
        console.info(name);
    });

    it('should support indexable interface for non number', function() {
        interface StringDictionary{
            [key: string] : string
        }

        const dictionary: StringDictionary = {
            name: "Faris",
            address: "Bandung"
        };

        expect(dictionary["name"]).toBe("Faris")
        expect(dictionary["address"]).toBe("Bandung")
    });

    it('should support interface extends', function() {

        const employee: Employee = {
            id: "1",
            name: "Faris",
            division: "Machine Learning"
        };

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Peje",
            division: "Manager",
            numberOfEmployees: 3
        }

        console.info(manager);
    });

    it('should support function interface', function() {
        const person: Person = {
            name: "Faris Ahmad",
            sayHello: function(name: string): string {
                return `Hello ${name}, my name is ${this.name}`
            }
        };

        console.info(person.sayHello("peje"));
    });

    it('should support intersection type', function() {
        interface hasName {
            name: string
        }
        interface hasId {
            id: string
        }

        type Domain = hasName & hasId;

        const domain: Domain = {
            name: "PJ",
            id: "1"
        }

        console.info(domain);
    });

    it('should support type assertion', function() {
        const person: any = {
            name: "faris",
            age: 20
        }

        const person2: Person = person as Person;

        console.info(person2);
    })

})