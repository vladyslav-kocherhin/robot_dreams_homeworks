import { Boiler } from '../src/boiler';
import { expect } from 'chai';
import { describe, it, afterEach } from 'mocha';
import { processEntity } from '../src/entity-processor';
import sinon from 'ts-sinon';

describe('Boiler unit tests', function () {

    afterEach(() => {
        sinon.restore();
    });

    it('Should mock boiler\'s heatWater method', function () {
        const boiler = new Boiler();
        const heatStub = sinon.stub(boiler, 'heatWater');

        processEntity(boiler);

        expect(heatStub.calledOnce).to.be.true;
    });
});
