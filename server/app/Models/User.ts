import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Position from './Position'
import Office from './Office'
import Bill from './Bill'

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

  @manyToMany(() => Bill)
  public bills: ManyToMany<typeof Bill>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
