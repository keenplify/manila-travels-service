import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Passenger from 'App/Models/Passenger'
import { PassengerResource } from 'App/Resources/PassengerResource'
import StoreValidator from 'App/Validators/Users/Passengers/StoreValidator'

export default class PassengersController {
  public async index ({ response, auth }: HttpContextContract) {
    const user = auth.user!

    const passengers = await Passenger.query().where('user_id', user.id)

    const resource = PassengerResource.collection(passengers)

    return response.resource(resource)
  }

  public async show ({ params, response }: HttpContextContract) {
    const { id } = params.id

    const passenger = await Passenger.firstOrFail(id)

    const resource = PassengerResource.make(passenger)

    return response.resource(resource)
  }

  public async store ({ request, response, auth }: HttpContextContract) {
    const user = auth.user!

    const data = await request.validate(StoreValidator)

    const passenger = await user.related('passengers').create(data)

    const resource = PassengerResource.make(passenger)

    return response.resource(resource)
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const route = await Passenger.findOrFail(params.id)

    await route.delete()

    return response.noContent()
  }
}
