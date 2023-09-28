import supertest from 'supertest';
import app from '../app';

const request = supertest(app);
it('test the api endpoint to be success santanmonica', (done) => {
  // const response = request.get('/api/images/?fileName=santamonica&width=500&height=500');
  request
    .get('/api/images/?fileName=santamonica&width=500&height=500')
    .then((response) => {
      expect(response.status).toBe(200);
    });
  done();
});
