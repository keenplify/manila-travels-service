import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Model from 'App/Core/Models/Model'
import Bus from 'App/Models/Bus'

export default class Seat extends Model {
  @column({columnName: 'bus_no'})
  public busNo: string

  @belongsTo(() => Bus)
  public bus: BelongsTo<typeof Bus>

  @column()
  public seatBooked: string
}

