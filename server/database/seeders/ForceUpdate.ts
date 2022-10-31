import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ForceUpdate from 'App/Models/ForceUpdate'

export default class extends BaseSeeder {
  public async run() {
    await ForceUpdate.create({
      id: 1,
      interval: 24,
    })
  }
}
