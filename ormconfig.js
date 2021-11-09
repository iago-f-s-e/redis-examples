module.exports = {
  type: process.env.TYPEORM_ENGINE,
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrationsRun: process.env.NODE_ENV === 'test' ? true : false,
  dropSchema: process.env.NODE_ENV === 'test' ? true : false,
  ssl: {
    rejectUnauthorized: false
  },
  entities: [
    process.env.TYPEORM_DIRECTORY_ENTITIES
  ],
  migrations: [process.env.TYPEORM_DIRECTORY_MIGRATIONS],
  cli: {
    entitiesDir: process.env.TYPEORM_DIRECTORY_SAVE_ENTITIES,
    migrationsDir: process.env.TYPEORM_DIRECTORY_SAVE_MIGRATIONS
  }
}