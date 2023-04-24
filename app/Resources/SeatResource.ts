import { ModelObject } from '@ioc:Adonis/Lucid/Orm'
import { BaseResource } from 'App/Core/Resources/BaseResource'
import Seat from 'App/Models/Seat'

export class SeatResource extends BaseResource {
  public toObject (model: Seat): ModelObject {
    return {
      busNo: model.busNo,
      booked: model.seatBooked,
    }
  }
}
