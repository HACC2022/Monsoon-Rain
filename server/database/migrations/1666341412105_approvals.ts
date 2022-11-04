import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'approvals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('testimony_id').references('id').inTable('testimonies')

      table.integer('user_id').references('id').inTable('users')

      table.unique(['testimony_id', 'user_id'])

      table.enum('type', ['approved', 'modify', 'clear'])

      table.enum('stage', ['ready', 'office', 'pipe', 'final'])
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
