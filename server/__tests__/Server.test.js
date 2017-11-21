const request = require('request');
const mongoose = require('mongoose');

describe('server', () => {
  let server;
  beforeAll(() => {
    // eslint-disable-next-line global-require
    server = require('../index.js');
  });

  afterAll(() => {
    server.close();
    mongoose.disconnect();
  });

  test('should respond to GET requests for / with a 200 status code', (done) => {
    request('http://127.0.0.1:3000/', (error, response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('should serve index.html for client side routes', (done) => {
    request('http://127.0.0.1:3000/select', (error, response) => {
      if (!error) {
        expect(response.body).toContain('PicVoyage');
      }
      done();
    });
  });
});
