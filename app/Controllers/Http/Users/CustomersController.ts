import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'
import { CustomerResource } from 'App/Resources/CustomerResource'
import StoreValidator from 'App/Validators/Users/Customers/StoreValidator'
import UpdateValidator from 'App/Validators/Users/Customers/UpdateValidator'

export default class CustomersController {
  public async index ({ response }: HttpContextContract) {
    const customersQuery = Customer.query()

    const customers = await customersQuery

    const resource = CustomerResource.collection(customers)

    return response.resource(resource)
  }

  public async show ({ params, response }: HttpContextContract) {
    const { id } = params.id

    const customer = await Customer.firstOrFail(id)

    const resource = CustomerResource.make(customer)

    return response.resource(resource)
  }

  public async store ({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const customer = await Customer.create(data)

    const resource = CustomerResource.make(customer)

    return response.resource(resource)
  }

  public async update ({ params, request, response }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)

    const customer = await Customer.findOrFail(params.id)

    customer.merge(data)

    await customer.save()

    const resource = CustomerResource.make(customer)

    return response.resource(resource)
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const route = await Customer.findOrFail(params.id)

    await route.delete()

    return response.noContent()
  }
}
