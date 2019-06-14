const faker = require('faker')

const createAccount = () => ({

  randomName: faker.internet.userName(),
  randomPassword: faker.internet.password()

})

const fakeUser = []
const num = 100
for (let i = 0; i < num; i++) {
  fakeUser.push(createAccount())
}

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          board: 'movies',
          topic: 'Gone with the Wind',
          userName: 'Blue',
          type: 1,
          media: 'https://www.filminquiry.com/wp-content/uploads/2019/03/gonewiththewindcover-750x500.jpg',
          text: 'Epic Civil War drama focuses on the life of petulant southern belle Scarlett (Vivien Leigh).'
        },
        {
          id: 2,
          board: 'dogs',
          topic: 'My aussie shepherd',
          userName: 'Blue',
          type: 1,
          media: 'http://www.dogzone.com/images/breeds/australian-shepherd.jpg',
          text: 'I love my aussie shepherd.'
        },
        {
          id: 3,
          board: 'fitness',
          topic: 'yoga',
          userName: 'Blue',
          type: 1,
          media: 'https://cdn1.medicalnewstoday.com/content/images/articles/318/318774/a-woman-practicing-yoga-on-the-beach.jpg',
          text: 'Yoga can help to treat depression'
        }
      ])
    })
}
