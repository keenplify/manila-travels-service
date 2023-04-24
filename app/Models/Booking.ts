import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Model from 'App/Core/Models/Model'
import Customer from 'App/Models/Customer'
import Route from 'App/Models/Route'
import { DateTime } from 'luxon'

export default class Booking extends Model {
  @column()
  public bookingId: string

  @column()
  public customerId: string

  @belongsTo(() => Customer)
  public client: BelongsTo<typeof Customer>

  @column()
  public routeId: string

  @belongsTo(() => Route, {foreignKey: 'routeId', localKey: 'routeId'})
  public route: BelongsTo<typeof Route>

  @column()
  public customerRoute: string

  @column()
  public bookedAmount: number

  @column()
  public bookedSeat: string

  @column.dateTime()
  public bookingCreated: DateTime
}

