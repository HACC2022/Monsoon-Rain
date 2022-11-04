import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Position from 'App/Models/Position'

export default class extends BaseSeeder {
  public async run() {
    await Position.createMany([
      {
        id: 1,
        name: 'Office',
      },
      {
        id: 2,
        name: 'PIPE',
      },
      {
        id: 3,
        name: 'Secretary',
      },
      {
        id: 4,
        name: 'Superintendent',
      },
    ])
  }
}
