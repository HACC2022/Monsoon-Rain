import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Approval from 'App/Models/Approval'
import Bill from 'App/Models/Bill'
import Comment from 'App/Models/Comment'
import ForceUpdate from 'App/Models/ForceUpdate'
import Testimony from 'App/Models/Testimony'

export default class BillsController {
  public async forceUpdateBills({ response }: HttpContextContract) {
    // Run scraper
    await ForceUpdate.query().where('id', 1).update({
      updatedAt: new Date().toISOString(),
    })
    console.log(Date.now())
    return response.ok({ status: true })
  }

  public async getBillFetchInterval({ request, response }: HttpContextContract) {
    try {
      const interval = await ForceUpdate.find(1)

      return response.ok({
        status: true,
        interval: interval?.interval,
        lastUpdated: interval?.updatedAt,
      })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not update interval' })
    }
  }

  public async updateBillFetchInterval({ request, response }: HttpContextContract) {
    try {
      const { interval } = request.body()

      console.log(request.body())

      await ForceUpdate.query().where('id', 1).update({
        interval,
      })

      return response.ok({ status: true, interval })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not update interval' })
    }
  }

  public async getAllBills({ response }: HttpContextContract) {
    try {
      const bills = await Bill.all()
      return response.ok({ status: true, data: bills, message: 'all bills returned' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not get all bills' })
    }
  }

  public async getBillById({ request, response }: HttpContextContract) {
    try {
      const id = request.param('id')
      const bill = await Bill.find(id)
      return response.ok({ status: true, data: bill, message: 'Bill returned' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not find bill by id' })
    }
  }

  public async getAllTestimonyForBillById({ request, response }: HttpContextContract) {
    try {
      const bill_id = request.param('id')
      const testimonies = await Testimony.findBy('bill_id', bill_id)
      return response.ok({
        status: true,
        data: testimonies,
        message: 'Testimonies returned for a given bill id',
      })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({
        status: false,
        message: 'Could not find testimonies for given bill id',
      })
    }
  }

  public async postComment({ request, response }: HttpContextContract) {
    try {
      const user = request.input('user')
      const message = request.input('comment')
      const bill_id = request.input('bill_id')

      const comment = new Comment()
      comment.user_id = user
      comment.message = message
      comment.bill_id = bill_id
      await comment.save()

      return response.created({ status: true, data: comment, message: 'Comment created' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not post comment' })
    }
  }

  public async postTestimony({ request, response }: HttpContextContract) {
    try {
      const user = request.input('user')
      const bill_id = request.input('bill_id')

      const testimony = new Testimony()
      testimony.users_prepared_by = user
      testimony.bill_id = bill_id
      await testimony.save()

      return response.created({ status: true, data: testimony, message: 'Testimony created' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not post testimony' })
    }
  }

  public async postApproval({ request, response }: HttpContextContract) {
    try {
      const user = request.input('user')
      const bill_id = request.input('bill_id')
      const type = request.input('type')

      const approval = new Approval()
      approval.bill_id = bill_id
      approval.approver = user
      approval.type = type
      await approval.save()

      return response.created({ status: true, data: approval, message: 'Approval created' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not post approval' })
    }
  }

  public async postAssignUsers({ request, response }: HttpContextContract) {
    try {
      const user = request.param('user')
      const id = request.param('bill_id')

      const updatedBill = await Bill.query().where('bill_id', id).update({ users: user })

      return response.ok({
        status: true,
        data: updatedBill,
        message: 'Bill updated with new assigned users',
      })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not update bill with new users' })
    }
  }

  public async postAssignOffices({ request, response }: HttpContextContract) {
    try {
      const offices = request.param('offices')
      const id = request.param('bill_id')

      const updatedBill = await Bill.query().where('bill_id', id).update({ offices: offices })

      return response.ok({
        status: true,
        data: updatedBill,
        message: 'Bill updated with new offices',
      })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({
        status: false,
        message: 'Could not update bill with new offices',
      })
    }
  }

  public async postAssignTestimony({ request, response }: HttpContextContract) {
    try {
      const testimony = request.param('testimony_body')
      const id = request.param('bill_id')

      const updatedTestimony = await Testimony.query()
        .where('bill_id', id)
        .update({ body: testimony })

      return response.ok({
        status: true,
        data: updatedTestimony,
        message: 'Testimony updated with new body',
      })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({
        status: false,
        message: 'Could not update testimony with new body',
      })
    }
  }
}
