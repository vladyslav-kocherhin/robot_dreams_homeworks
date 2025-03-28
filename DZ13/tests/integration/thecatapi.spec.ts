import axios from 'axios';
import { expect } from 'chai';
import { ImageSearchResponse, FavouriteResponse, VoteResponse } from '../../src/models/catapi.dto';

describe('TheCatAPI Integration: images ↔ favourites ↔ votes', () => {
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const API_KEY = 'live_1HXlE7Lgzeacz4ZMN4cE0MzAM3ckzn8kj7OQCKq0mwWqEpvra5ChJ1fCKHiUqpRB';
    const headers = { 'x-api-key': API_KEY };
    const sub_id = 'robot_dreams_user';

    let imageId: string;
    let favouriteId: number;
    let voteId: number;

    it('GET /images/search — отримати випадкову картинку', async () => {
        const res = await axios.get<ImageSearchResponse[]>(`${BASE_URL}/images/search`, { headers });
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an('array').that.is.not.empty;
        imageId = res.data[0].id;
        expect(imageId).to.be.a('string');
    });

    it('POST /favourites — додати картинку в улюблене', async () => {
        const res = await axios.post<{ id: number }>(`${BASE_URL}/favourites`, {
            image_id: imageId,
            sub_id
        }, { headers });
        expect(res.status).to.equal(200);
        favouriteId = res.data.id;
    });

    it('POST /votes — проголосувати за картинку', async () => {
        const res = await axios.post<{ id: number }>(`${BASE_URL}/votes`, {
            image_id: imageId,
            sub_id,
            value: 1
        }, { headers });
        expect(res.status).to.equal(201);
        voteId = res.data.id;
    });

    it('GET /favourites — перевірити, що картинка в улюбленому', async () => {
        const res = await axios.get<FavouriteResponse[]>(`${BASE_URL}/favourites?sub_id=${sub_id}`, { headers });
        const found = res.data.find(f => f.image_id === imageId);
        expect(found).to.exist;
    });

    it('GET /votes — перевірити наявність голосу', async () => {
        const res = await axios.get<VoteResponse[]>(`${BASE_URL}/votes?sub_id=${sub_id}`, { headers });
        const found = res.data.find(v => v.image_id === imageId && v.id === voteId);
        expect(found).to.exist;
    });

    it('DELETE /votes/{vote_id} — видалити голос', async () => {
        const res = await axios.delete(`${BASE_URL}/votes/${voteId}`, { headers });
        expect(res.status).to.equal(200);
    });

    it('DELETE /favourites/{favourite_id} — видалити з улюбленого', async () => {
        const res = await axios.delete(`${BASE_URL}/favourites/${favouriteId}`, { headers });
        expect(res.status).to.equal(200);
    });
});
