import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({}, [rules.exists({ table: 'users', column: 'user_name' })]),
    password: schema.string(),
  })
}
