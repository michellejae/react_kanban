exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table => {
    table.increments('id').notNullable();
    table.string('name', 255).unique().notNullable();
    table.string('priority', 255).notNullable();
    table.string('status').notNullable();
    table.string('created_by').notNullable();
    table.string('assigned_to').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards')
};
