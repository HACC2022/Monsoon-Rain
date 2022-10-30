import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Office from './Office'
import User from './User'

export default class Bill extends BaseModel {
  @column({ isPrimary: true })
  public bill_id: number

  @column()
  public link: string

  @column()
  public report_title: string

  @column()
  public measure_title: string

  @column()
  public introduced_by: string

  @column()
  public description: string

  @column()
  public legislation_type: string

  @column()
  public committee_referral: string

  @column()
  public action: string

  @column()
  public status: string

  @column()
  public all_versions: string

  @column()
  public committee_reports: string

  @column()
  public youtube: string

  @column()
  public last_status_text: string

  @column()
  public act: string

  @column()
  public hearing_date: string

  @column()
  public hearing_location: string

  @column()
  public committee: string

  @manyToMany(() => User)
  public users: ManyToMany<typeof User>

  @manyToMany(() => Office)
  public offices: ManyToMany<typeof Office>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
