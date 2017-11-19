const request = require('request');

describe('server', () => {
  let server;
  beforeEach(() => {
    // eslint-disable-next-line global-require
    server = require('../index.js');
  });

  afterEach(() => server.close());

  test('should respond to GET requests for / with a 200 status code', (done) => {
    request('http://127.0.0.1:3000/', (error, response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
