import { expect } from 'chai';
import app from '../src/app';
import { agent as request } from 'supertest';

describe("DNA Simian test", () => {

    it('should DELETE /simian', async function () {
        const res = await request(app).delete('/simian');
        expect(res.status).to.equals(200);
    });
    
    it('should GET /simian', async function () {
        const res = await request(app).get('/simian');
        expect(res.status).to.equals(200);
        expect(res.body).to.be.an("array");

    });

    it('should return 200 is simian', async function () {

        const chainValid = [
        'AAAAAA',
        'AAAAAA',
        'AAAAAA',
        'AAAAAA',
        'AAAAAA',
        'AAAAAA',
        ];

        const res = await request(app).post('/simian').send({dna: chainValid});
        expect(res.status).to.equals(200);

    });

    it('should return 403 is human', async function () {

        const chainInValid = [
        'ACTCAA',
        'ATCGTA',
        'CAGATG',
        'CGCATA',
        'TGACAT',
        'ACAGTA',
        ];

        const res = await request(app).post('/simian').send({dna: chainInValid});
        expect(res.status).to.equals(403);

    });

    
    it('should return 400 is chain invalid', async function () {

        const chainInValid = [
        'AAAAAA',
        'AAAAAA',
        'AAXAAA',
        'AAAAAA',
        'AAAAAA',
        'AAAAAA',
        ];

        const res = await request(app).post('/simian').send({dna: chainInValid});
        expect(res.status).to.equals(400);

    });

    it('should return 500', async function () {
        const res = await request(app).post('/simian');
        expect(res.status).to.equals(500);
    });


});