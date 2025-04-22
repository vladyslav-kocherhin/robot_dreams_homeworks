import { expect } from 'chai';
import { JokeService } from '../src/services/joke.service';

describe('Official Joke API Tests', () => {
    it('Should fetch a random joke', async () => {
        const joke = await JokeService.getRandomJoke();
        expect(joke).to.have.property('setup');
        expect(joke).to.have.property('punchline');
    });

    it('Should fetch ten jokes', async () => {
        const jokes = await JokeService.getTenJokes();
        expect(jokes).to.be.an('array').with.length(10);
    });

    it('Should fetch a random programming joke', async () => {
        const joke = await JokeService.getRandomProgrammingJoke();
        expect(joke.type).to.equal('programming');
    });

    it('Should fetch a random general joke', async () => {
        const joke = await JokeService.getRandomGeneralJoke();
        expect(joke.type).to.equal('general');
    });

    it('Should fetch a random knock-knock joke', async () => {
        const joke = await JokeService.getRandomKnockKnockJoke();
        expect(joke.type).to.equal('knock-knock');
    });
});
