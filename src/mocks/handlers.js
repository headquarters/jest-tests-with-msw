import { rest } from 'msw';
import faker from 'faker';

// Providing a seed ensures stable data over app reloads
faker.seed(5000);

function createPost() {
  return {
    id: faker.datatype.uuid(),
    text: faker.lorem.sentences(),
    title: faker.lorem.words(),
    timestamp: faker.date.past()
  };
}

function createPosts() {
  return [createPost(), createPost(), createPost()];
}

export const handlers = [
  rest.get('/api/', (req, res, ctx) => {
    return res(ctx.json(createPosts()));
  }),
];