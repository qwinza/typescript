import { Customer, CustomerType } from "../src/enum"

describe('Enum', function() {
    it('should support enum', function() {

        const customer: Customer = {
            id: 1,
            name: "peje",
            type: CustomerType.GOLD
        }

        console.info(customer);
    })
})