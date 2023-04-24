import { ModelObject } from '@ioc:Adonis/Lucid/Orm'
import { BaseResource } from 'App/Core/Resources/BaseResource'
import Bus from 'App/Models/Bus'
import { SeatResource } from 'App/Resources/SeatResource'

export class BusResource extends BaseResource {
  public toObject (model: Bus): ModelObject {
    return {
      no: model.busNo,
      assigned: model.busAssigned,
      created: model.busCreated,
      status: model.status,
      seats: model.seat ? SeatResource.make(model.seat) : undefined,
    }
  }
}
