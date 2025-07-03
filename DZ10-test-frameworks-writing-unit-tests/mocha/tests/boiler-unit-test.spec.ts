import { Boiler } from '../src/boiler';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('Boiler', () => {
    it('Boiler should heat water', () => {
        const boiler = new Boiler();
        expect(() => boiler.heatWater()).to.not.throw();
    });
});
