import { Boiler } from '../src/boiler';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { processEntity } from '../src/entity-processor';
import sinon from 'ts-sinon';

describe('Boiler unit tests', function () {
    let boiler: Boiler;

    beforeEach(() => {
        boiler = new Boiler();
    });

    it('Should mock boiler\'s heatWater method', function () {
        const heatStub = sinon.stub(boiler, 'heatWater');

        processEntity(boiler);

        expect(heatStub.calledOnce).to.be.true;

        heatStub.restore();
    });
});
