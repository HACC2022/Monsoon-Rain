import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
    public async register({ request, response }: HttpContextContract) {
        const firstName = request.input('firstName')
        const lastName = request.input('lastName')
        const email = request.input('email')
        const password = request.input('password')
        // const confirmPassword = request.input('confirmPassword')

        const user = new User()
        user.first_name = firstName
        user.last_name = lastName
        user.email = email
        user.password = password
        await user.save()

        return response.created({ status: true, data: user, message: 'User created'})
    }

    public async login({ auth, request, response }) {
        const email = request.input('email')
        const password = request.input('password')
        try {
            await auth.use('basic').attempt(email, password)
            return response.ok({ status: true, message: 'Success' })
        } catch (error) {
            console.log(error.message)
            return response.badRequest({ status: false, message: 'Incorrect credentials' })
        }
    }

    public async logout({ auth, response }) {
        await auth.use('web').logout()
        console.log('User logged out')
        response.redirect('/login')
    }

}
