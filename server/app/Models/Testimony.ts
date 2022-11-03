import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Bill from './Bill'
import User from './User'

export default class Testimony extends BaseModel {
  @column({ isPrimary: true, columnName: 'testimony_id' })
  public testimony_id: number

  @column.dateTime()
  public date: DateTime

  @belongsTo(() => Bill, {
    foreignKey: 'testimony_id',
  })
  public bill_id: BelongsTo<typeof Bill>

  @belongsTo(() => User, {
    foreignKey: 'testimony_id',
  })
  public users_prepared_by: BelongsTo<typeof User>

  // @column()
  // public created_at: string

  @column()
  public body: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
