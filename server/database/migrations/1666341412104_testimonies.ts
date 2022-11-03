import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'testimonies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('testimony_id').primary()

      table.text('date', 'longtext')

      table.integer('bill_id').unsigned().references('bills.bill_id').onDelete('CASCADE')

      table.integer('users_prepared_by').references('user_id').inTable('users')

      table.text('body', 'longtext')

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
