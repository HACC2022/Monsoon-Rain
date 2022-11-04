import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Testimony from './Testimony'

export default class Approval extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public testimonyId: number

  @belongsTo(() => Testimony)
  public testimony: BelongsTo<typeof Testimony>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public type: 'approved' | 'modify' | 'clear'

  @column()
  public stage: 'ready' | 'office' | 'pipe' | 'final'

  @column()
  public created_at: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
