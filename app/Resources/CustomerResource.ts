import { ModelObject } from '@ioc:Adonis/Lucid/Orm'
import { BaseResource } from 'App/Core/Resources/BaseResource'
import Customer from 'App/Models/Customer'
import { BookingResource } from 'App/Resources/BookingResource'

export class CustomerResource extends BaseResource {
  public toObject (model: Customer): ModelObject {
    return {
      id: model.id,
      customer: {
        id: model.customerId,
        name: model.customerName,
        phone: model.customerPhone,
        createdAt: model.customerCreated,
      },
      type: model.type,
      bookingId: model.bookingId,
      booking: model.booking ? BookingResource.make(model.booking) : undefined,
    }
  }
}
