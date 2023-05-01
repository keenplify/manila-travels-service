import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'
import { CustomerResource } from 'App/Resources/CustomerResource'
import StoreValidator from 'App/Validators/Users/Customers/StoreValidator'
import UpdateValidator from 'App/Validators/Users/Customers/UpdateValidator'

export default class CustomersControllerController {
  public async index ({ response, auth }: HttpContextContract) {
    const user = auth.user

    const customersQuery = Customer.query()

    if (user) {
      customersQuery.where('user_id', user.id)
    }

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

  public async store ({ request, response, auth }: HttpContextContract) {
    const user = auth.user!

    const data = await request.validate(StoreValidator)

    const customer = await user.related('customers').create(data)

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
