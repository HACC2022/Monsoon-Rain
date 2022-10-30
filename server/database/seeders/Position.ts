import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Position from 'App/Models/Position'

export default class extends BaseSeeder {
  public async run() {
    await Position.createMany([
      {
        position_id: 1,
        name: 'Superintendent',
      },
      {
        position_id: 2,
        name: 'Tracker',
      },
    ])
  }
}
