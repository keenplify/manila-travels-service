import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drive from '@ioc:Adonis/Core/Drive'
import { Exception } from '@adonisjs/core/build/standalone'
import UploadValidator from 'App/Validators/Global/Image/UploadValidator'

export default class FileUploadsController {
  public async store ({ request, response }: HttpContextContract) {
    const { image } = await request.validate(UploadValidator)

    await image.moveToDisk('./')

    if (!image.filePath || !image.fileName) {
      throw new Exception('File path is missing.')
    }

    const pictureUrl = await Drive.getUrl(image.fileName)

    return response.status(201).json({
      data: {
        url: pictureUrl,
        path: image.fileName,
      },
    })
  }
}
