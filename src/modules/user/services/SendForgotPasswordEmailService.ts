import AppError from "@shared/errors/AppError";
import path from 'path'
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../typeorm/repositories/UseRepository";
import { UserTokensRepository } from "../typeorm/repositories/UseTokensRepository";
import EtherealMail from '@config/mail/EtherealMail'

interface IRequest {
  email: string
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UserRepository)
    const userTokenRepository = getCustomRepository(UserTokensRepository)
    const user = await usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('User does not exists')
    }

    const { token } = await userTokenRepository.generate(user.id)

    const forgotPasswordTemplate = path.resolve(__dirname, '..', 'views', 'forgot_password.hbs')

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email
      },

      subject: '[SUPORTE] Recupração de senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `${process.env.APP_WEB_URL}/reset_password?token=${token}`
        }
      }
    })
  }
}

export default SendForgotPasswordEmailService
