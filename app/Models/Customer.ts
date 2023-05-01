import { HasOne, beforeSave, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { getRandomNumber } from 'App/Core/Helpers/Random'
import Model from 'App/Core/Models/Model'
import { CustomerType } from 'App/Enums/CustomerType'
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
  public bookingId: string | null

  @column()
  public type: CustomerType

  @hasOne(() => Booking, { foreignKey: 'bookingId', localKey: 'bookingId' })
  public booking: HasOne<typeof Booking>

  @beforeSave()
  public static populateFields (customer: Customer) {
    if (!customer.customerId) {
      customer.customerId = `CUST-${getRandomNumber(6)}`
    }
  }
}

