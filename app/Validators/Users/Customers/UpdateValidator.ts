import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomerTypes } from 'App/Enums/CustomerType'

export default class UpdateValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    customerName: schema.string.optional(),
    customerPhone: schema.string.optional(),
    type: schema.enum.optional(CustomerTypes),
    validIdImageUrl: schema.string.optional(),
  })
}
