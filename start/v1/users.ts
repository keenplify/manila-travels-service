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

  Route.group(() => {
    Route.resource('bookings', 'BookingsController').apiOnly().only(['index', 'store', 'destroy'])
    Route.resource('routes', 'RoutesController').apiOnly().only(['index', 'show', 'store', 'update', 'destroy'])
    Route.resource('buses', 'BusController').apiOnly().only(['index', 'show', 'store', 'update', 'destroy'])
    Route.resource('customers', 'CustomersController').apiOnly().only(['index', 'show', 'store', 'update', 'destroy'])
    Route.resource('passengers', 'PassengersController').apiOnly().only(['index', 'show', 'store', 'destroy'])
    Route.resource('file-upload', 'FileUploadsController').apiOnly().only(['store'])
  }).middleware('auth:user')
})
  .prefix('v1/users')
  .as('v1.users')
  .namespace('App/Controllers/Http/Users')
