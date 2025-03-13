import { Dog, Cat, Wolf } from '../src/animal';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { processEntity, interactWithHomeAnimal, interactWithWildAnimal } from '../src/entity-processor';
import sinon from 'ts-sinon';

describe('Animal unit tests', function () {

    it('Should mock dog\'s makeSound method', function () {
        const dog = new Dog('Rex');
        const dogMock = sinon.mock(dog);
        dogMock.expects('makeSound').once();

        processEntity(dog);

        dogMock.verify();
        dogMock.restore();
    });

    it('Should mock cat\'s feed and pet methods', function () {
        const cat = new Cat('Misty');
        const feedStub = sinon.stub(cat, 'feed');
        const petStub = sinon.stub(cat, 'pet');

        interactWithHomeAnimal(cat);

        expect(feedStub.calledOnce).to.be.true;
        expect(petStub.calledOnce).to.be.true;

        feedStub.restore();
        petStub.restore();
    });

    it('Should mock wolf\'s hunt method', function () {
        const wolf = new Wolf('Shadow');
        const huntSpy = sinon.spy(wolf, 'hunt');

        interactWithWildAnimal(wolf);

        expect(huntSpy.calledOnce).to.be.true;

        huntSpy.restore();
    });
});
