exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').notNullable();
    table.string('username', 255);
    table.string('googleId', 255);
    table.string('twitterId', 255);
    table.string('facebookId', 255);
    table.string('githubId', 255);
 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
