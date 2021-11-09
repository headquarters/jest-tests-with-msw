const faker = require('faker');
const fs = require('fs');

function createPost() {
  return {
    id: faker.datatype.number(),
    text: faker.lorem.paragraph(),
    title: faker.lorem.sentence(),
    timestamp: faker.date.past()
  };
}

function createPosts() {
  return [createPost(), createPost(), createPost()];
}

const posts = createPosts();

const data = JSON.stringify(posts);

try {
  fs.writeFileSync('./data.json', data);
} catch (e) {
  console.error(e);
}
