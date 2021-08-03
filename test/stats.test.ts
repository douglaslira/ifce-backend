import { expect } from 'chai';
import app from '../src/app';
import { agent as request } from 'supertest';

describe("STATS Test", () => {
    
    it('should GET /stats', async function () {

        const res = await request(app).get('/stats');
        expect(res.status).to.equals(200);

    });

});