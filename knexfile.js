// Update with your config settings.
const path = require(`path`);

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: '127.0.0.1',
      database: 'kanban_db',
      charset: 'utf8'
    },
    migrations: {
      directory: path.join(__dirname, '/server/db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'server/db/seeds')
    },
    debug: false
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
