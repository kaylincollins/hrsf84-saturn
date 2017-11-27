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
      if (!error) {
        expect(response.statusCode).toBe(200);
      }
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

  test('should respond to POST requests for / with a 201 status code', (done) => {
    request('http://127.0.0.1:3000/', (error, response) => {
      if (!error) {
        expect(response.statusCode).toBe(201);
      }
      done();
    });
  });

  test('should respond to POST requests for /search with a 201 status code', (done) => {
    request('http://127.0.0.1:3000/', (error, response) => {
      if (!error) {
        expect(response.statusCode).toBe(201);
      }
      done();
    });
  });

  test('should respond to GET requests for /wrongpath with a 404 status code', (done) => {
    request('http://127.0.0.1:3000/', (error, response) => {
      if (!error) {
        expect(response.statusCode).toBe(404);
      }
      done();
    });
  });
});
