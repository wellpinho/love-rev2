import AppError from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UseRepository";

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: User
  token: string
}

class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Incorrect email or password', 401)
    }

    const passwordConfirmed = await compare(password, user.password)

    if (!passwordConfirmed) {
      throw new AppError('Incorrect email or password', 401)
    }

    const token = sign({}, '57f4fb5de95b5412f1bf83a59ecd3a58', {
      subject: user.id,
      expiresIn: '1d'
    })
    await userRepository.save(user)

    return { user, token }
  }
}

export default CreateSessionsService
