import axios from 'axios';
import { Joke } from '../models/joke.dto';

const BASE_URL = 'https://official-joke-api.appspot.com';

export class JokeService {
    public static async getRandomJoke(): Promise<Joke> {
        const response = await axios.get<Joke>(`${BASE_URL}/jokes/random`);
        return response.data;
    }

    public static async getTenJokes(): Promise<Joke[]> {
        const response = await axios.get<Joke[]>(`${BASE_URL}/jokes/ten`);
        return response.data;
    }

    public static async getRandomProgrammingJoke(): Promise<Joke> {
        const response = await axios.get<Joke[]>(`${BASE_URL}/jokes/programming/random`);
        return response.data[0];
    }

    public static async getRandomGeneralJoke(): Promise<Joke> {
        const response = await axios.get<Joke[]>(`${BASE_URL}/jokes/general/random`);
        return response.data[0];
    }

    public static async getRandomKnockKnockJoke(): Promise<Joke> {
        const response = await axios.get<Joke[]>(`${BASE_URL}/jokes/knock-knock/random`);
        return response.data[0];
    }
}
