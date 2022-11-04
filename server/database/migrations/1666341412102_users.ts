import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.text('first_name', 'longtext')

      table.text('last_name', 'longtext')

      table.text('email', 'longtext')

      table.text('password', 'longtext')

      table.integer('position_id').references('id').inTable('positions')

      table.integer('office_id').references('id').inTable('offices')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
