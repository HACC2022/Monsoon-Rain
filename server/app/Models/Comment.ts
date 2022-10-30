import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Bill from './Bill'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public comment_id: number

  @belongsTo(() => User)
  public user_id: BelongsTo<typeof User>

  @belongsTo(() => Bill)
  public bill_id: BelongsTo<typeof Bill>

  @column()
  public message: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}