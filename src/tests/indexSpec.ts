// import packages
import supertest from 'supertest';

import app from '../index';

const request = supertest(app);

describe('Test Endpoint ', () => {
  it('get the image after processing', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200'
    );

    expect(response.status).toBe(200);
  });
});

describe('Test image processing', () => {
  it('check if the filename does not pass', async () => {
    const response = await request.get(`/api/images`);

    expect(response.body.error).toEqual('Enter filename');
  });

  it('Check if the filename does not exist', async () => {
    const response = await request.get('/api/images?filename=ff');

    expect(response.body.error).toEqual('Filename does not exist');
  });
});
