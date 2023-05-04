import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserUpdateValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    fullName: schema.string.optional(),
    password: schema.string.optional(),
  })
}
