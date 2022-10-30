import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Office from 'App/Models/Office'

export default class OfficesController {
  public async index({ response }: HttpContextContract) {
    try {
      const offices = await Office.all()
      return response.ok({ status: true, data: offices, message: 'All offices returned' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not get all offices' })
    }
  }
}
