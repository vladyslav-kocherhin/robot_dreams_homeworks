import { Dog, Cat, Wolf } from '../src/animal';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('Animals', () => {
    it('Dog should make sound', () => {
        const dog = new Dog('Buddy');
        const dogSound = dog.makeSound();
        expect(dogSound).to.equal('Buddy гавкає: Гав-гав!');
    });

    it('Cat should make sound', () => {
        const cat = new Cat('Whiskers');
        const catSound = cat.makeSound();
        expect(catSound).to.equal('Whiskers мявкає: Мяв-мяв!');
    });

    it('Wolf should make sound', () => {
        const wolf = new Wolf('Альфа');
        const wolfSound = wolf.makeSound();
        expect(wolfSound).to.equal('Альфа виє: Аууууу!');
    });

    it('Wolf should be able to hunt', () => {
        const wolf = new Wolf('Альфа');
        const wolfHunt = wolf.hunt();
        expect(wolfHunt).to.equal('Альфа полює в лісі.');
    });
});

