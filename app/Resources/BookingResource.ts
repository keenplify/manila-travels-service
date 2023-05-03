import { ModelObject } from '@ioc:Adonis/Lucid/Orm'
import { BaseResource } from 'App/Core/Resources/BaseResource'
import Booking from 'App/Models/Booking'
import { CustomerResource } from 'App/Resources/CustomerResource'
import { RouteResource } from 'App/Resources/RouteResource'
import { UserResource } from 'App/Resources/UserResource'

export class BookingResource extends BaseResource {
  public toObject (model: Booking): ModelObject {
    return {
      id: model.id,
      bookingId: model.bookingId,
      customerId: model.customerId,
      customer: model.customer ? CustomerResource.make(model.customer) : undefined,
      routeId: model.routeId,
      route: model.route ? RouteResource.make(model.route) : undefined,
      customerRoute: model.customerRoute,
      bookedAmount: model.bookedAmount.value,
      bookedSeat: model.bookedSeat,
      referenceNo: model.referenceNo,
      userId: model.userId,
      user: model.user ? UserResource.make(model.user) : undefined,
    }
  }
}
