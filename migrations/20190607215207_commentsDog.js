exports.up = function (knex, Promise) {
  return knex.schema.createTable('commentsDog', function (table) {
    table.increments('id').primary()
    table.integer('userID').notNullable()
    table.integer('topicID').notNullable()
    table.string('media')
    table.string('text', 1000)
    table.timestamps(false, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('commentsDog')
}
