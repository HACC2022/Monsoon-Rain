import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Testimony from 'App/Models/Testimony'
import User from 'App/Models/User'

export default class CommentsController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const userId = request.input('userId')
      const testimonyId = request.input('testimonyId')
      const message = request.input('message')

      const user = await User.findOrFail(userId)
      const testimony = await Testimony.findOrFail(testimonyId)

      const comment = new Comment()

      comment.message = message

      await comment.related('user').associate(user)
      await comment.related('testimony').associate(testimony)

      await comment.save()

      return response.created({ status: true, data: comment, message: 'Comment created' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not post comment' })
    }
  }
}
