import { Boiler } from '../src/boiler';
import { Rectangle } from '../src/shape';
import { Dog, Cat, Wolf } from '../src/animal';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { processEntity, interactWithHomeAnimal, interactWithWildAnimal } from '../src/entity-processor';

describe('Entity Processing Functions', () => {
    it('Should process Boiler correctly', () => {
        const boiler = new Boiler();
        expect(() => processEntity(boiler)).to.not.throw();
    });

    it('Should process Animal correctly', () => {
        const dog = new Dog('Rex');
        expect(() => processEntity(dog)).to.not.throw();
    });

    it('Should process Shape correctly', () => {
        const rect = new Rectangle(3, 6);
        expect(() => processEntity(rect)).to.not.throw();
    });

    it('Should interact with home animal', () => {
        const cat = new Cat('Mittens');
        expect(() => interactWithHomeAnimal(cat)).to.not.throw();
    });

    it('Should interact with wild animal', () => {
        const wolf = new Wolf('Fang');
        expect(() => interactWithWildAnimal(wolf)).to.not.throw();
    });
});
