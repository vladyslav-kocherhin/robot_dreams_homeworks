import { Rectangle, Square } from '../src/shape';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('Shapes', () => {
    it('Rectangle should calculate area correctly', () => {
        const rect = new Rectangle(5, 5);
        expect(rect.getArea()).to.equal(20);
    });

    it('Square should calculate area correctly', () => {
        const square = new Square(4);
        expect(square.getArea()).to.equal(16);
    });
});
