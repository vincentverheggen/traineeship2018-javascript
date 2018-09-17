import Shape from '../src/shape';

describe('Shape', () => {
    it('Rechtangle', () => {
        let shape = new Shape("Red", 0, 5);
        shape.move(10, 15)
        expect(shape.x).toEqual(10);
        expect(shape.y).toEqual(15);
    });
 });