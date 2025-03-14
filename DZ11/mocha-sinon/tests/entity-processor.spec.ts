import { Boiler } from '../src/boiler';
import { Rectangle } from '../src/shape';
import { Dog } from '../src/animal';
import { expect } from 'chai';
import { describe, it, afterEach } from 'mocha';
import { processEntity } from '../src/entity-processor';
import sinon from 'ts-sinon';

describe('Entity processor tests', function () {

    afterEach(() => {
        sinon.restore();
    });

    it('Should process an Animal correctly', function () {
        const dog = new Dog('Buddy');
        const soundStub = sinon.stub(dog, 'makeSound');

        processEntity(dog);

        expect(soundStub.calledOnce).to.be.true;
    });

    it('Should process a Boiler correctly', function () {
        const boiler = new Boiler();
        const heatStub = sinon.stub(boiler, 'heatWater');

        processEntity(boiler);

        expect(heatStub.calledOnce).to.be.true;
    });

    it('Should process a Shape correctly', function () {
        const rectangle = new Rectangle(3, 4);
        const areaStub = sinon.stub(rectangle, 'getArea').returns(12);

        processEntity(rectangle);

        expect(areaStub.calledOnce).to.be.true;
    });
});
