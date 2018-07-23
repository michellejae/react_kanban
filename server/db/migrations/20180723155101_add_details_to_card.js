
exports.up = function(knex, Promise) {
  return knex.schema.table('cards', table => {
    table.text('details');
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cards', table => {
    table.dropColumn('details');
  })
};

