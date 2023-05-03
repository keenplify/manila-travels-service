import { ModelObject } from '@ioc:Adonis/Lucid/Orm'
import { BaseResource } from 'App/Core/Resources/BaseResource'
import Booking from 'App/Models/Booking'

export class BookingResource extends BaseResource {
  public toObject (model: Booking): ModelObject {
    return {
      id: model.id,
      bookingId: model.bookingId,
      customerId: model.customerId,
      routeId: model.routeId,
      customerRoute: model.customerRoute,
      bookedAmount: model.bookedAmount.value,
      bookedSeat: model.bookedSeat,
      referenceNo: model.referenceNo,
    }
  }
}
