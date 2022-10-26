import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bills'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('bill_id')

      table.text('link', 'longtext')

      table.text('report_title', 'longtext')

      table.text('measure_title', 'longtext')

      table.text('introduced_by', 'longtext')

      table.text('description', 'longtext')

      table.text('legislation_type', 'longtext')

      table.text('committee_referral', 'longtext')

      table.integer('office').references('office_id').inTable('offices')

      table.text('action', 'longtext')

      table.text('status', 'longtext')

      table.text('all_versions', 'longtext')

      table.text('committee_reports', 'longtext')

      table.text('youtube', 'longtext')

      table.text('last_status_text', 'longtext')

      table.text('act', 'longtext')

      table.text('hearing_date', 'longtext')

      table.text('hearing_location', 'longtext')

      table.text('committee', 'longtext')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}