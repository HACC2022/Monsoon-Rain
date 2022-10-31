import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  // Default connection
  connection: Env.get('DB_CONNECTION'),

  // List of available connections
  connections: {
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('PG_HOST'),
        port: Env.get('PG_PORT'),
        user: Env.get('PG_USER'),
        password: Env.get('PG_PASSWORD', ''),
        database: Env.get('PG_DB_NAME'),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },
    sqlite: {
      client: 'sqlite',
      connection: {
        filename: './db.sqlite3',
      },
      migrations: {
        naturalSort: true,
      },
      useNullAsDefault: true,
      healthCheck: false,
      debug: false,
      seeders: {
        paths: ['./database/seeders/MainSeeder'],
      },
    },
  },
}

export default databaseConfig
