import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Position from './Position'
import Office from './Office'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public user_id: number

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public email: string

  @column()
  public password: string
  
  @belongsTo(() => Position)
  public position_id: BelongsTo<typeof Position>

  @belongsTo(() => Office)
  public office_id: BelongsTo<typeof Office>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
