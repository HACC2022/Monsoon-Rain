// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bill from 'App/Models/Bill'
import Testimony from 'App/Models/Testimony'
import User from 'App/Models/User'

export default class TestimoniesController {
  public async getById({ request, response }: HttpContextContract) {
    try {
      const id = request.param('id')
      const testimony = await Testimony.query().preload('comments').where('id', id)

      return response.ok({
        status: true,
        data: testimony,
      })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not post testimony' })
    }
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      const userId = request.input('userId')
      const billId = request.input('billId')

      const bill = await Bill.findOrFail(billId)
      const user = await User.findOrFail(userId)

      const testimony = new Testimony()

      await testimony.related('bill').associate(bill)
      await testimony.related('user').associate(user)

      await testimony.save()

      return response.created({
        status: true,
        id: testimony.id,
        message: 'Testimony created',
      })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not post testimony' })
    }
  }
}
