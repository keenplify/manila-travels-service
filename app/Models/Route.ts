import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Model from 'App/Core/Models/Model'
import Bus from 'App/Models/Bus'
import { DateTime } from 'luxon'

export default class Route extends Model {
  @column()
  public routeId: string

  @column()
  public busNo: string

  @belongsTo(() => Bus, {foreignKey: 'busNo', localKey: 'busNo'})
  public bus: BelongsTo<typeof Bus>

  @column({ columnName: 'route_location'})
  public location: string

  public get from () {
    return this.location.split(',')[0].trim()
  }

  public get to () {
    return this.location.split(',')[1].trim()
  }

  @column.date({ columnName: 'route_dep_date'})
  public departureDate: DateTime

  @column({ columnName: 'route_dep_time'})
  public departureTime: string

  @column({ columnName: 'route_step_cost'})
  public stepCost: number
}

