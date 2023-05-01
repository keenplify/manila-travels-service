import { HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Authenticatable from 'App/Core/Models/Authenticatable'
import Passenger from 'App/Models/Passenger'

export default class User extends Authenticatable {
  @column({ isPrimary: true, columnName: 'user_id' })
  public id: number

  @column({ columnName: 'user_fullname' })
  public fullName: string

  @column({ columnName: 'user_name' })
  public username: string

  @column({ columnName: 'user_password' })
  public password: string

  @hasMany(() => Passenger)
  public passengers: HasMany<typeof Passenger>
}
