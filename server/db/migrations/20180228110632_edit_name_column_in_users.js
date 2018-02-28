
exports.up = function(knex, Promise) {
  return knex.schema.table('cards', table => {
    table.dropUnique('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('card', table =>{
    table.addUnique('name');
  })
};
