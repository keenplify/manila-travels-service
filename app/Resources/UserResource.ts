import { ModelObject } from '@ioc:Adonis/Lucid/Orm'
import { BaseResource } from 'App/Core/Resources/BaseResource'
import User from 'App/Models/User'

export class UserResource extends BaseResource {
  public toObject (model: User): ModelObject {
    return {
      id: model.id,
      fullName: model.fullName,
      username: model.username,
    }
  }
}
