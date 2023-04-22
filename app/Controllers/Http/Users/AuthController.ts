import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { UserResource } from 'App/Resources/UserResource'
import LoginValidator from 'App/Validators/Users/Auth/LoginValidator'
import RegisterValidator from 'App/Validators/Users/Auth/RegisterValidator'

export default class AuthController {
  public async login ({ request, response, auth }: HttpContextContract) {
    const guard = auth.use('user')

    const { username, password } = await request.validate(LoginValidator)

    const payload = await guard.attempt(username, password)

    const resource = UserResource.make(payload.user).additional({
      access: payload.toJSON(),
    })

    return response.resource(resource)
  }

  public async register ({ request, response, auth }: HttpContextContract) {
    const values = await request.validate(RegisterValidator)
    const guard = auth.use('user')

    const user = await User.create(values)

    const payload = await guard.generate(user)

    const resource = UserResource.make(payload.user).additional({
      access: payload.toJSON(),
    })

    return response.resource(resource, 201)
  }

  public check ({ auth, response }: HttpContextContract) {
    const resource = UserResource.make(auth.use('user').user)

    return response.resource(resource)
  }

  public async logout ({ auth, response }: HttpContextContract) {
    const guard = auth.use('user')

    await guard.logout()

    return response.status(204)
  }
}
