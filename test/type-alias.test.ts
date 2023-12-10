import { Category, Product } from "../src/type-alias"

describe('Type Alis', function(){
    it('should support in typescript', function(){

        const category: Category = {
            id: 1,
            name: "Gadget"
        };

        const product: Product = {
            id: "1",
            name: "Handphone",
            price: 100000,
            category: category
        }

        console.info(category);
        console.info(product);
    })
})