import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Approval from 'App/Models/Approval'
import Bill from 'App/Models/Bill'
import ForceUpdate from 'App/Models/ForceUpdate'
import Office from 'App/Models/Office'
import Testimony from 'App/Models/Testimony'
import User from 'App/Models/User'
import cron from 'node-cron'
// import exec from 'child_process'

export default class BillsController {
  public async test({ response }: HttpContextContract) {
    const bill = await Bill.findOrFail(1)

    const offices = await bill.related('offices').query()

    return response.ok({
      data: {
        bill,
        offices,
      },
    })
  }
  public async forceUpdateBills({ response }: HttpContextContract) {
    // exec('python3 ../../../../../../scripts/scrape.py', () => {})

    await ForceUpdate.query().where('id', 1).update({
      updatedAt: new Date().toISOString(),
    })

    return response.ok({ status: true })
  }

  public async getBillFetchInterval({ response }: HttpContextContract) {
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

      cron.schedule(`* ${interval} * * *`, () => {
        // exec('python3 ../../../../../../scripts/scrape.py', () => {})
      })

      return response.ok({ status: true, interval })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not update interval' })
    }
  }

  public async getAllBills({ response }: HttpContextContract) {
    try {
      const bills = await Bill.query().preload('offices').preload('users').limit(20)

      return response.ok({ status: true, data: bills, message: 'all bills returned' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not get all bills' })
    }
  }

  public async getBillByOffice({ request, response }: HttpContextContract) {
    try {
      const officeId: number = request.param('id')
      let bills

      if (Number(officeId) !== -1) {
        bills = await Bill.query()
          .whereHas('offices', (q) => q.where('office_id', officeId))
          .preload('offices')
          .preload('users')
          .limit(20)
      } else {
        console.log(officeId)
        bills = await Database.from('bills').limit(20)
      }

      return response.ok({ status: true, data: bills, message: 'all bills returned' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not get all bills' })
    }
  }

  public async getBillById({ request, response }: HttpContextContract) {
    try {
      const id = request.param('id')
      const bill = await Bill.query()
        .preload('offices')
        .preload('users')
        .preload('testimonies', (query) => {
          query.preload('user')
        })
        .where('id', id)
        .firstOrFail()

      return response.ok({ status: true, data: bill, message: 'Bill returned' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not find bill by id' })
    }
  }

  public async getBillByMeasureNumber({ request, response }: HttpContextContract) {
    try {
      const id = request.param('id')

      let bill: Bill[]

      if (id !== 'null') {
        bill = await Bill.query().where('measure_number', Number(id))
      } else {
        bill = await Database.from('bills').limit(20)
      }

      return response.ok({ status: true, data: bill, message: 'Bill returned' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not find bill by id' })
    }
  }

  public async sortBills({ request, response }: HttpContextContract) {
    try {
      const type = request.param('type')
      let bill: Bill[]

      if (type !== 'null') {
        bill = await await Bill.query().orderBy(type, 'asc').limit(20)
      } else {
        bill = await Database.from('bills').limit(20)
      }

      return response.ok({ status: true, data: bill, message: 'Bill returned' })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not find bill by id' })
    }
  }

  public async getAllTestimonyForBillById({ request, response }: HttpContextContract) {
    try {
      const billId = request.param('id')

      const bill = await Bill.findOrFail(billId)

      const testimonies = await bill.related('testimonies').query()

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

  public async postAssignUsers({ request, response }: HttpContextContract) {
    try {
      const userIds: number[] = request.input('users')
      const billId = request.input('billId')

      console.log(userIds)

      const bill = await Bill.findOrFail(billId)

      await userIds.map(async (id) => {
        const user = await User.findOrFail(id)
        await bill.related('users').attach([user.id])
      })

      return response.ok({
        status: true,
        message: 'Bill updated with new assigned users',
      })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({ status: false, message: 'Could not update bill with new users' })
    }
  }

  public async postAssignOffices({ request, response }: HttpContextContract) {
    try {
      const officeIds: number[] = request.input('offices')
      const billId = request.input('billId')

      const bill = await Bill.findOrFail(billId)

      console.log(request.input('offices'))

      await officeIds.map(async (id) => {
        const office = await Office.findOrFail(id)
        await bill.related('offices').attach([office.id])
      })

      return response.ok({
        status: true,
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

  public async updateAction({ request, response }: HttpContextContract) {
    try {
      const id = request.param('id')
      const action = request.input('action')

      await Bill.query().where('id', id).update({
        action,
      })

      response.ok({ status: true })
    } catch (error) {
      console.log(error.message)
      return response.badRequest({
        status: false,
        message: 'Could not update bill with new offices',
      })
    }
  }
}
