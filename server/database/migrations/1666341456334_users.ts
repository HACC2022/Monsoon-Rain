import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_id')

      table.text('first_name', 'longtext')

      table.text('last_name', 'longtext')

      table.text('email', 'longtext')

      table.integer('position_id').references('position_id').inTable('positions')

      table.integer('office_id').references('office_id').inTable('offices')

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