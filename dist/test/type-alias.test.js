describe('Type Alis', function () {
    it('should support in typescript', function () {
        const category = {
            id: 1,
            name: "Gadget"
        };
        const product = {
            id: "1",
            name: "Handphone",
            price: 100000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
