import { Rectangle, Square } from '../src/shape';
import { expect } from 'chai';
import { describe, it, afterEach } from 'mocha';
import sinon from 'ts-sinon';

describe('Shape unit tests', function () {

    afterEach(() => {
        sinon.restore();
    });

    it('Should correctly mock getArea method of Rectangle', function () {
        const rectangle = new Rectangle(2, 5);
        const areaStub = sinon.stub(rectangle, 'getArea').returns(100);

        const area = rectangle.getArea();

        expect(area).to.equal(100);
        expect(areaStub.calledOnce).to.be.true;
    });

    it('Should correctly mock getArea method of Square', function () {
        const square = new Square(3);
        const areaStub = sinon.stub(square, 'getArea').returns(50);

        const area = square.getArea();

        expect(area).to.equal(50);
        expect(areaStub.calledOnce).to.be.true;
    });
});
