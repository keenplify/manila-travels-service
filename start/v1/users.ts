import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.post('login', 'AuthController.login').as('login')
    Route.post('register', 'AuthController.register').as('register')

    Route.group(() => {
      Route.get('check', 'AuthController.check').as('check')
      Route.post('logout', 'AuthController.logout').as('logout')
    }).middleware('auth:user')
  })
    .prefix('auth')
    .as('auth')

  Route.resource('routes', 'RoutesController').apiOnly().only(['index', 'show', 'store', 'update', 'destroy'])
  Route.resource('buses', 'BusController').apiOnly().only(['index', 'show', 'store', 'update', 'destroy'])
})
  .prefix('v1/users')
  .as('v1.users')
  .namespace('App/Controllers/Http/Users')
