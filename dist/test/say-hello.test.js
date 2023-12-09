import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return say faris', function () {
        expect(sayHello('Faris')).toBe('Hello Faris');
    });
});
