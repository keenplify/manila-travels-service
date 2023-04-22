import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import Model from 'App/Core/Models/Model'

export default class Booking extends Model {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
