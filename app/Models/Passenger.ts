import { BelongsTo, HasOne, belongsTo, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { booleanColumn } from 'App/Core/Decorators/Boolean'
import Model from 'App/Core/Models/Model'
import { CustomerType } from 'App/Enums/CustomerType'
import Booking from 'App/Models/Booking'
import User from 'App/Models/User'
import { DateTime } from 'luxon'

export default class Passenger extends Model {
  @column()
  public name: string

  @column()
  public phone: string

  @column()
  public type: CustomerType

  @column()
  public validIdImageUrl: string | null

  @booleanColumn()
  public isVerified: boolean

  @hasOne(() => Booking, { foreignKey: 'bookingId', localKey: 'bookingId' })
  public booking: HasOne<typeof Booking>

  @column()
  public userId: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime()
  public createdAt: DateTime
}

