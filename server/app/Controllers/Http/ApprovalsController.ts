import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Approval from 'App/Models/Approval'
import Testimony from 'App/Models/Testimony'
import User from 'App/Models/User'

export default class ApprovalsController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const userId = request.input('userId')
      const testimonyId = request.input('testimonyId')
      const type = request.input('type')
      const stage = request.input('stage')

      const testimony = await Testimony.findOrFail(testimonyId)
      const user = await User.findOrFail(userId)

      const approval = new Approval()

      approval.type = type
      approval.stage = stage

      await approval.related('testimony').associate(testimony)
      await approval.related('user').associate(user)

      await approval.save()

      return response.created({ status: true, data: approval, message: 'Approval created' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not post approval' })
    }
  }
}
