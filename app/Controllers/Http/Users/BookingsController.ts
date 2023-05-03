import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Booking from 'App/Models/Booking'
import User from 'App/Models/User'
import { BookingResource } from 'App/Resources/BookingResource'
import StoreValidator from 'App/Validators/Users/Bookings/StoreValidator'
import currency from 'currency.js'

export default class BookingsController {
  public async index ({response, auth}:HttpContextContract) {
    const query = Booking.query().preload('route').preload('customer')

    if (auth.user instanceof User) {
      query.where('user_id', auth.user.id)
    }

    const booking = await query

    const resource = BookingResource.collection(booking)

    return response.resource(resource)
  }

  public async store ({ request, response }: HttpContextContract) {
    const {bookedAmount, ...data} = await request.validate(StoreValidator)

    const booking = await Booking.create({
      ...data,
      bookedAmount: currency(bookedAmount),
    })

    const resource = BookingResource.make(booking)

    return response.resource(resource)
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const booking = await Booking.findOrFail(params.id)

    await booking.delete()

    return response.noContent()
  }
}
