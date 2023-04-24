import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bus from 'App/Models/Bus'
import { BusResource } from 'App/Resources/BusResource'

export default class BusController {
  public async index ({response}:HttpContextContract) {
    const buses = await Bus.query().preload('seat')

    const resource = BusResource.collection(buses)

    return response.resource(resource)
  }
}
