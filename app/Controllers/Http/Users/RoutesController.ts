import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from 'App/Models/Route'
import { RouteResource } from 'App/Resources/RouteResource'

export default class RoutesControllerController {
  public async index ({ response }: HttpContextContract) {
    const routes = await Route.query()

    const resource = RouteResource.collection(routes)

    return response.resource(resource)
  }

  public async show ({ params, response }: HttpContextContract) {
    const route = await Route.query().where('id', params.id).firstOrFail()

    const resource = RouteResource.make(route)

    return response.resource(resource)
  }

  // public async store({ request, response }: HttpContextContract) {
  //   // Validate the request body
  //   const { muscleGroups, ...payload } = await request.validate({
  //     schema: WorkoutLibraryStoreSchema,
  //   })

  //   // Create a new workout library from the validated request body
  //   const library = new WorkoutLibrary()
  //   library.merge(payload)
  //   library.muscleGroups = muscleGroups
  //   await library.save()

  //   const resource = WorkoutResource.make(library)

  //   return response.resource(resource)
  // }

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
