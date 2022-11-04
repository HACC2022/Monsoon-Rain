import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bill from 'App/Models/Bill'
import Comment from 'App/Models/Comment'
import User from 'App/Models/User'

export default class CommentsController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const userId = request.input('userId')
      const billId = request.input('billId')
      const message = request.input('message')

      const user = await User.findOrFail(userId)
      const bill = await Bill.findOrFail(billId)

      const comment = new Comment()

      comment.message = message

      await comment.related('user').associate(user)
      await comment.related('bill').associate(bill)

      await comment.save()

      return response.created({ status: true, data: comment, message: 'Comment created' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not post comment' })
    }
  }
}
