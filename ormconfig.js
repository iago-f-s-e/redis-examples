const myMigrations = process.env.TYPEORM_DIRECTORY_MIGRATIONS || ''
const myEntities = process.env.TYPEORM_DIRECTORY_ENTITIES || ''
const saveEntities = process.env.TYPEORM_DIRECTORY_SAVE_ENTITIES || ''
const saveMigrations = process.env.TYPEORM_DIRECTORY_SAVE_MIGRATIONS || ''

module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  cache: {
    type: 'redis',
    options: {
      url: process.env.REDIS_TLS_URL,
      ssl: { rejectUnauthorized: false },
      tls: { rejectUnauthorized: false }
    }
  },
  ssl: {
    rejectUnauthorized: false
  },
  entities: [myEntities],
  migrations: [myMigrations],
  cli: {
    entitiesDir: saveEntities,
    migrationsDir: saveMigrations
  }
}
