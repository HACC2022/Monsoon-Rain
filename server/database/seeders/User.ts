import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        user_id: 1,
        first_name: 'Joe',
        last_name: 'Minoe',
        email: 'joe.minoe@k12.hi.us',
        password: 'password',
      },
      {
        user_id: 2,
        first_name: 'Paul',
        last_name: 'Laker',
        email: 'paul.laker@k12.hi.us',
        password: 'password',
      },
      {
        user_id: 3,
        first_name: 'Loius',
        last_name: 'Lamar',
        email: 'louis.lamar@k12.hi.us',
        password: 'password',
      },
    ])

    await User.query().where('user_id', 1).update({
      position_id: 1,
      office_id: 1,
    })
    await User.query().where('user_id', 2).update({
      position_id: 2,
      office_id: 2,
    })
    await User.query().where('user_id', 3).update({
      position_id: 3,
      office_id: 3,
    })
  }
}
