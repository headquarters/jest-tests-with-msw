import { rest } from 'msw';
import data from './data.json';

const delay = process.env.NODE_ENV === "test" ? 0 : 500;

export const handlers = [
  rest.get('/api/', (req, res, ctx) => {
    return res(ctx.delay(delay), ctx.json(data));
  }),


  rest.get('/api/:id', (req, res, ctx) => {
    const { id } = req.params;
    const post = data.find(post => post.id.toString() === id);
    return res(ctx.delay(delay), ctx.json(post));
  }),
];