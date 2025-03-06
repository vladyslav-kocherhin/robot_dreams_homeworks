import { Boiler } from '../src/boiler';
import { Rectangle, Square } from '../src/shape';
import { Dog, Cat, Wolf } from '../src/animal';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { processEntity, interactWithHomeAnimal, interactWithWildAnimal } from '../src/entity-processor';

describe('Animals', () => {
    it('Dog should make sound', () => {
        const dog = new Dog('Buddy');
        expect(() => dog.makeSound()).to.not.throw();
    });

    it('Cat should make sound', () => {
        const cat = new Cat('Whiskers');
        expect(() => cat.makeSound()).to.not.throw();
    });

    it('Wolf should make sound', () => {
        const wolf = new Wolf('Greyfang');
        expect(() => wolf.makeSound()).to.not.throw();
    });

    it('Wolf should be able to hunt', () => {
        const wolf = new Wolf('Greyfang');
        expect(() => wolf.hunt()).to.not.throw();
    });
});

describe('Boiler', () => {
    it('Boiler should heat water', () => {
        const boiler = new Boiler();
        expect(() => boiler.heatWater()).to.not.throw();
    });
});

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
