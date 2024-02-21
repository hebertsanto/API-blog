import supertest from 'supertest';
import { app } from '../src/infra/express/express';

const data = {
  comment: 'comment',
  postId: 'post UUID',
  userId: 'UUDI'
};

test('POST should return error if token does not exist', async() => {
  const response = await supertest(app)
    .post('/comment')
    .send(data);
  expect(response.body.msg).toBe('token was not provider in header req');
  expect(response.status).toBe(400);
});

test('POST should return error if token is not valid', async() => {
  const token = 'this token is not valid';
  const response = await supertest(app)
    .post('/comment')
    .set('authorization', `Bearer ${token}`)
    .send(data);
  expect(response.body.msg).toBe('token is not valid');
  expect(response.status).toBe(400);
});
