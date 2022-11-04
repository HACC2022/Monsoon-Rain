import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'approvals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('approval_id')

      table.integer('bill_id').references('id').inTable('bills')

      table.integer('approver').references('id').inTable('users')

      table.unique(['bill_id', 'approver'])

      table.enum('type', ['approved', 'modify', 'clear'])
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
