import { ModelObject } from '@ioc:Adonis/Lucid/Orm'
import { BaseResource } from 'App/Core/Resources/BaseResource'
import Passenger from 'App/Models/Passenger'
import { UserResource } from 'App/Resources/UserResource'

export class PassengerResource extends BaseResource {
  public toObject (model: Passenger): ModelObject {
    return {
      id: model.id,
      name: model.name,
      phone: model.phone,
      createdAt: model.createdAt,
      isVerified: model.isVerified,
      validIdImageUrl: model.validIdImageUrl,
      type: model.type,
      userId: model.userId,
      user: model.user ? UserResource.make(model.user) : undefined,
    }
  }
}
