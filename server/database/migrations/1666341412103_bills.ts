import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bills'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.text('link', 'longtext')

      table.text('report_title', 'longtext')

      table.text('measure_title', 'longtext')

      table.text('introduced_by', 'longtext')

      table.text('description', 'longtext')

      table.text('measure_type', 'longtext')

      table.text('committee_referral', 'longtext')

      table.text('action', 'longtext')

      table.text('status', 'longtext')

      table.text('all_versions', 'longtext')
      table.text('youtube', 'longtext')

      table.text('committee_reports', 'longtext')

      table.text('hearing', 'longtext')

      table.text('companion_bill', 'longtext')

      table.text('last_updated', 'longtext')

      table.text('measure_number', 'longtext')

      table.text('year', 'longtext')

      table.text('code', 'longtext')

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
