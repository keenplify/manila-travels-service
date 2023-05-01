import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomerTypes } from 'App/Enums/CustomerType'

export default class StoreValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    customerName: schema.string(),
    customerPhone: schema.string(),
    type: schema.enum(CustomerTypes),
    validIdImageUrl: schema.string(),
  })
}
