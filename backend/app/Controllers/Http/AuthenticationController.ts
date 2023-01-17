import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

const emailValidationRules = schema.string({ trim: true }, [
  rules.email(),
  rules.unique({
    table: 'users',
    column: 'email',
    caseInsensitive: true,
  }),
])

const passwordValidationRules = schema.string({}, [
  rules.minLength(8),
  rules.regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')),
])

export default class AuthenticationController {
  public async index({ auth, response }: HttpContextContract) {
    const user = auth.user

    if (user === undefined) {
      return response.ok({})
    }

    return user.toJSON()
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const userSchema = schema.create({
      name: schema.string({ trim: true }),
      email: emailValidationRules,
      password: passwordValidationRules,
    })

    const data = await request.validate({ schema: userSchema })

    const user = await User.create(data)

    const token = await auth.use('api').login(user)

    return response.status(200).send({
      user,
      token,
    })
  }

  public async login({ request, response, auth }: HttpContextContract) {
    console.log(auth.isAuthenticated)

    if (auth.isAuthenticated) return response.status(200)

    const dataSchema = schema.create({
      email: schema.string({ trim: true }, [rules.email()]),
      password: passwordValidationRules,
    })

    const { email, password } = await request.validate({ schema: dataSchema })

    const token = await auth.attempt(email, password)

    console.log(token)

    const user = await User.findBy('email', email)

    console.log(user)

    return response.send({
      user: user,
      token: token,
    })
  }

  public async edit({ request, response, auth }: HttpContextContract) {
    const user = auth.user!

    const dataSchema = schema.create({
      email: schema.string.optional({ trim: true }, [rules.email()]),
      name: schema.string.optional({ trim: true }),
    })

    const newData = await request.validate({ schema: dataSchema })

    const newUserObject = {
      ...user,
      ...newData,
    }

    const newUser = await user.merge(newUserObject).save()

    return response.send(newUser)
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()

    return response.status(200)
  }
}
