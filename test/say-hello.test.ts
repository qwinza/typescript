import { sayHello } from "../src/say-hello";

describe('sayHello', function (): void {
    it('should return say faris', function(): void {
        expect(sayHello('Faris')).toBe('Hello Faris')
    })
})