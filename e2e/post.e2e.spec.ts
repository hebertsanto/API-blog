import { app } from '../src/infra/express/express';
import supertest from 'supertest';

const data = {
  title: 'title post',
  content: 'this post has been created',
  userId: '0585ffbf-e0dd-498f-a418-b78d6dc08643',
};

test('/GET should return if token is not valid', async () => {
  const sut = 'token-not-valid';
  const id_non_existent = 'some-id';
  const response = await supertest(app)
    .get(`/post/${id_non_existent}`)
    .set('authorization', `Bearer ${sut}`);
  expect(response.body.msg).toBe('token is not valid');
  expect(response.status).toBe(400);
});

test('/GET should return error if id does not exist', async () => {
  const token = process.env.TOKEN;
  const sut = 'e13ac2ac-69b6-41a4-b263-b56c183f951c';
  const response = await supertest(app)
    .get(`/post/${sut}`)
    .set('authorization', `Bearer ${token}`);
  expect(response.status).toBe(400);
  expect(response.body.msg).toBe('post id does not exist');
});

test('/GET should return msg missing token is not present', async () => {
  const id_non_existent = 'some-id';
  const response = await supertest(app).get(`/post/${id_non_existent}`);
  expect(response.status).toBe(400);
  expect(response.body.msg).toBe('token was not provider in header req');
});

test('/GET should return post if everything is ok', async () => {
  const access_token = process.env.TOKEN;
  const post_id = '760e6baa-d0d3-4aa3-85d3-ad9d10f9a35b';
  const response = await supertest(app)
    .get(`/post/${post_id}`)
    .set('authorization', `Bearer ${access_token}`);
  expect(response.body.msg).toBe('post found successfully');
  expect(response.body).toHaveProperty('post');
  expect(response.status).toBe(200);
  expect(response.body.post).toBeDefined();
});

test('/POST should create post if everything is ok', async () => {
  const access_token = process.env.TOKEN;
  const response = await supertest(app)
    .post('/post')
    .set('authorization', `Bearer ${access_token}`)
    .send(data);
  expect(response.body.msg).toBe('post created successfully');
  expect(response.body).toHaveProperty('post');
  expect(response.status).toBe(201);
  expect(response.body.post).toBeDefined();
});

test('/POST should return a error if userId does not exist', async () => {
  const access_token = process.env.TOKEN;
  const data = {
    title: 'title post',
    content: 'this post has been created',
    userId: '1c116e56-5683-4650-a1cd-5dd3280fa26f',
  };
  const response = await supertest(app)
    .post('/post')
    .set('authorization', `Bearer ${access_token}`)
    .send(data);
  expect(response.body.msg).toBe('userId not found');
  expect(response.status).toBe(400);
});
