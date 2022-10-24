import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Bill from './Bill'
import User from './User'

export default class Approval extends BaseModel {
  @column({ isPrimary: true })
  public approval_id: number

  @belongsTo(() => Bill)
  public bill_id: BelongsTo<typeof Bill>

  @belongsTo(() => User)
  public approver: BelongsTo<typeof User>

  @column()
  public type: string

  @column()
  public created_at: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
