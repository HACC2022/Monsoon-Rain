import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in dev mode and seeder is development
     * only
     */
    if (Seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    console.log('ran')
    await new Seeder.default(this.client).run()
  }
  public async run() {
    await this.runSeeder(await import('../Office'))
    await this.runSeeder(await import('../Position'))
    await this.runSeeder(await import('../User'))
  }
}
