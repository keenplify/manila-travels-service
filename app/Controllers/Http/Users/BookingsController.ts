import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Booking from 'App/Models/Booking'
import { BookingResource } from 'App/Resources/BookingResource'
import StoreValidator from 'App/Validators/Users/Bookings/StoreValidator'
import currency from 'currency.js'

export default class BookingsController {
  public async index ({response}:HttpContextContract) {
    const booking = await Booking.query().preload('route').preload('customer')

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
