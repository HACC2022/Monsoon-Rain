import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Bill from './Bill'
import User from './User'
import Comment from './Comment'
import Approval from './Approval'

export default class Testimony extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public date: DateTime

  @column()
  public billId: number

  @column()
  public userId: number

  @belongsTo(() => Bill)
  public bill: BelongsTo<typeof Bill>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @hasMany(() => Approval)
  public approvals: HasMany<typeof Approval>

  // @column()
  // public created_at: string

  @column()
  public body: string

  @column()
  public position: 'support' | 'oppose' | 'comments'

  @column()
  public same: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
