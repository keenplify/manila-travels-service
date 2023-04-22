import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    fullName: schema.string(),
    username: schema.string([rules.unique({ table: 'users', column: 'user_name'})]),
    password: schema.string(),
  })
}
