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
Route.get('bills', 'BillsController.getAllBills')
Route.get('bills/:id', 'BillsController.getBillById')
Route.get('bills/testimonies/:id', 'BillsController.getAllTestimonyForBillById')
Route.post('bills/comment/:id', 'BillsController.postComment')
Route.post('bills/testimony/:id', 'BillsController.postTestimony')
Route.post('bills/testimony/approval/:id', 'BillsController.postApproval')
Route.post('bills/testimonies/assign/users/:id', 'BillsController.postAssignUsers')
Route.post('bills/testimonies/assign/offices.:id', 'BillsController.postAssignOffices')
Route.post('bills/testimonies/:id', 'BillsController.postAssignTestimony')

Route.get('/', async () => {
  return { hello: 'world' }
})
