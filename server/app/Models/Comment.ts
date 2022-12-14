import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Bill from './Bill'
import Testimony from './Testimony'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public billId: number

  @column()
  public userId: number

  @column()
  public testimonyId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Testimony)
  public testimony: BelongsTo<typeof Testimony>

  @column()
  public message: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
