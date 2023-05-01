import { BelongsTo, HasOne, belongsTo, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Model from 'App/Core/Models/Model'
import { CustomerType } from 'App/Enums/CustomerType'
import Booking from 'App/Models/Booking'
import User from 'App/Models/User'
import { DateTime } from 'luxon'

export default class Customer extends Model {
  @column()
  public customerId: string

  @column()
  public customerName: string

  @column()
  public customerPhone: string

  @column.dateTime()
  public customerCreated: DateTime

  @column()
  public bookingId: string | null

  @column()
  public type: CustomerType

  @column()
  public validIdImageUrl: string | null

  @hasOne(() => Booking, { foreignKey: 'bookingId', localKey: 'bookingId' })
  public booking: HasOne<typeof Booking>

  @column()
  public userId: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}

