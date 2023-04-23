import { ModelObject } from '@ioc:Adonis/Lucid/Orm'
import { BaseResource } from 'App/Core/Resources/BaseResource'
import Route from 'App/Models/Route'

export class RouteResource extends BaseResource {
  public toObject (model: Route): ModelObject {
    return {
      id: model.id,
      routeId: model.id,
      busNo: model.busNo,
      location: model.location,
      from: model.from,
      to: model.to,
      departureDate: model.departureDate,
      departureTime: model.departureTime,
      stepCost: model.stepCost,
    }
  }
}
