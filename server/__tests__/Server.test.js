const request = require('request');

describe('server', () => {
  let server;
  beforeAll(() => {
    // eslint-disable-next-line global-require
    server = require('../index.js');
  });

  afterAll(() => server.close());

  test('should respond to GET requests for / with a 200 status code', (done) => {
    request('http://127.0.0.1:3000/', (error, response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('should serve index.html for client side routes', (done) => {
    request('http://127.0.0.1:3000/select', (error, response) => {
      expect(response.body).toContain('PicVoyage');
      done();
    });
  });
});
