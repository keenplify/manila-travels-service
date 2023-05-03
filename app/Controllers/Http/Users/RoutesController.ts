import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from 'App/Models/Route'
import { RouteResource } from 'App/Resources/RouteResource'
import StoreValidator from 'App/Validators/Users/Bookings/StoreValidator'

export default class RoutesControllerController {
  public async index ({ response }: HttpContextContract) {
    const routes = await Route.query().preload('bus', busBuilder => busBuilder.preload('seat'))

    const resource = RouteResource.collection(routes)

    return response.resource(resource)
  }

  public async show ({ params, response }: HttpContextContract) {
    const route = await Route
      .query()
      .where('id', params.id)
      .preload('bus', busBuilder => busBuilder.preload('seat'))
      .firstOrFail()

    const resource = RouteResource.make(route)

    return response.resource(resource)
  }

  // public async update({ params, request, response }: HttpContextContract) {
  //   // Retrieve the workout library by id
  //   const library = await WorkoutLibrary.findOrFail(params.id)

  //   // Validate the request body
  //   const { muscleGroups, ...payload } = await request.validate({
  //     schema: WorkoutLibraryUpdateSchema,
  //   })

  //   // Update the workout library with the validated request body
  //   library.merge(payload)

  //   if (muscleGroups !== undefined) {
  //     library.muscleGroups = muscleGroups
  //   }

  //   await library.save()

  //   const resource = WorkoutResource.make(library)

  //   return response.resource(resource)
  // }

  public async destroy ({ params, response }: HttpContextContract) {
    const route = await Route.findOrFail(params.id)

    await route.delete()

    return response.noContent()
  }
}
