
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('loginInfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('loginInfo').insert([
        {
          id: 1,
          userName: 'Eric',
          password: 'Eric1234'
        },
        {
          id: 2,
          userName: 'Sasan',
          password: 'Sasan1234'
        },
        {
          id: 3,
          userName: 'Ernie',
          password: 'Ernie1234'
        },
        {
          id: 4,
          userName: 'Blue',
          password: 'Blue1234'
        }
      ])
    })
}
