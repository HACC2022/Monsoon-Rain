import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Office from 'App/Models/Office'

export default class extends BaseSeeder {
  public async run() {
    await Office.createMany([
      {
        office_id: 1,
        name: 'Office of Student Support Services',
        abbreviation: 'OSSS',
      },
      {
        office_id: 2,
        name: 'Office of Curriculum and Instructional Design',
        abbreviation: 'OCID',
      },
      {
        office_id: 3,
        name: 'Office of Strategy, Innovation and Performance',
        abbreviation: 'OSIP',
      },
      {
        office_id: 4,
        name: 'Office of Talent Management',
        abbreviation: 'OTM',
      },
    ])
  }
}
