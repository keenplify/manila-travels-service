import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UploadValidator {
  constructor (protected ctx: HttpContextContract) {}

  public schema = schema.create({
    image: schema.file({
      size: '5mb',
      extnames: ['jpg', 'gif', 'png', 'jpeg'],
    }),
  })
}
