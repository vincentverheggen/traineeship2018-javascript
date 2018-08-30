import Helloworld from '../src/helloworld';

describe('Hello world', () => {
    it('my first test', () => {
        let helloWorld = new Helloworld('Joey');
        expect(helloWorld.getMessage()).toEqual('Hello Joey!');
    });
});