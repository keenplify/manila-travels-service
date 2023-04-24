import { HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Model from 'App/Core/Models/Model'
import Booking from 'App/Models/Booking'
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
  public bookingId: string

  @hasOne(() => Booking, { foreignKey: 'bookingId', localKey: 'bookingId' })
  public subscriptions: HasOne<typeof Booking>
}

