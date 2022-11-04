import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Bill from './Bill'
import User from './User'

export default class Approval extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public billId: number

  @column()
  public userId: number

  @belongsTo(() => Bill)
  public bill: BelongsTo<typeof Bill>

  @belongsTo(() => User)
  public approver: BelongsTo<typeof User>

  @column()
  public type: 'approved' | 'modify' | 'clear'

  @column()
  public created_at: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
