/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

/** Auth */
Route.post('register', 'AuthController.register')
Route.post('login', 'AuthController.login')
Route.get('logout', 'AuthController.logout')

/** Bill */
Route.get('test', 'BillsController.test')
Route.get('bills', 'BillsController.getAllBills')
Route.get('bills/:id', 'BillsController.getBillById')
Route.get('bills/measure/:id', 'BillsController.getBillByMeasureNumber')
Route.get('bills/search/:type', 'BillsController.sortBills')
Route.get('bills/testimonies/:id', 'BillsController.getAllTestimonyForBillById')
Route.post('bills/testimony/approval/:id', 'BillsController.postApproval')
Route.post('bills/assign/users', 'BillsController.postAssignUsers')
Route.post('bills/assign/offices', 'BillsController.postAssignOffices')
Route.patch('bills/testimonies/:id', 'BillsController.postUpdateTestimony')
Route.get('bill/interval', 'BillsController.getBillFetchInterval')
Route.patch('bill/interval', 'BillsController.updateBillFetchInterval')
Route.get('bill/force', 'BillsController.forceUpdateBills')

/** Offices */
Route.get('offices', 'OfficesController.index')

/** Users */
Route.get('users', 'UsersController.index')

/** Comments */
Route.post('comment/', 'CommentsController.create')

/** Testimonies */
Route.post('testimony/', 'TestimoniesController.create')
Route.get('testimony/:id', 'TestimoniesController.getById')

Route.get('/', async () => {
  return { hello: 'world' }
})
