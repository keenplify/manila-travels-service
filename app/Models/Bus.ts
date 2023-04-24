import { HasMany, HasOne, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Model from 'App/Core/Models/Model'
import Route from 'App/Models/Route'
import Seat from 'App/Models/Seat'
import { DateTime } from 'luxon'

export default class Bus extends Model {
  @column()
  public busNo: string

  @column({consume: (v) => Boolean(v)})
  public busAssigned: boolean

  @column.dateTime()
  public busCreated: DateTime

  @column()
  public status: string

  @hasOne(() => Seat, {foreignKey: 'busNo', localKey: 'busNo' })
  public seat: HasOne<typeof Seat>

  @hasMany(() => Route, {foreignKey: 'busNo', localKey: 'busNo' })
  public routes: HasMany<typeof Route>
}

