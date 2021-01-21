import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../typeorm/repositories/UseRepository";
import { UserTokensRepository } from "../typeorm/repositories/UseTokensRepository";

interface IRequest {
  email: string
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const userTokenRepository = getCustomRepository(UserTokensRepository)

    const user = await userRepository.findByEmail(email)

    if (!user) {
      throw new AppError('User does not exists.')
    }

    const token = await userTokenRepository.generate(user.id)

    console.log(token)
  }
}

export default SendForgotPasswordEmailService
