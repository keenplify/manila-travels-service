import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    passengerId: schema.string(),
    routeId: schema.string(),
    customerRoute: schema.string(),
    bookedAmount: schema.number(),
    bookedSeat: schema.string(),
    referenceNo: schema.string(),
  })
}
