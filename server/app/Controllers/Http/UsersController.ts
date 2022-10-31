// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      const offices = await User.all()
      return response.ok({ status: true, data: offices, message: 'All users returned' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not get all users' })
    }
  }
}
