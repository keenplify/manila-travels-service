import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { UserResource } from 'App/Resources/UserResource'
import UserUpdateValidator from 'App/Validators/Users/User/UpdateValidator'

export default class UsersController {
  public async update ({ params, request, response }: HttpContextContract) {
    const data = await request.validate(UserUpdateValidator)

    const user = await User.findOrFail(params.id)

    user.merge(data)

    await user.save()

    const resource = UserResource.make(user)

    return response.resource(resource)
  }
}
