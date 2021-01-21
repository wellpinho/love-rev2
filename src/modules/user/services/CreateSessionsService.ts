import AppError from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UseRepository";

interface IRequest {
  email: string
  password: string
}

// interface IResponse {
//   user: User
// }

class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Incorrect email or password', 401)
    }

    const passwordConfirmed = await compare(password, user.password)

    if (!passwordConfirmed) {
      throw new AppError('Incorrect email or password', 401)
    }

    await userRepository.save(user)

    return user
  }
}

export default CreateSessionsService
